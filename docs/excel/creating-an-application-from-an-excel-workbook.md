---
id: creating
title: Creating an application from an Excel workbook
sidebar_label: Creating an application

---
Operational functions sitting in Excel workbooks is a common occurrence in the financial sector. And it sometimes includes functions that are mission-critical.

The Genesis LCNC Platform gives you a way of turning these into applications that can be audited and maintained in a standard and controlled manner. Along the way, you can build in better workflow and usability without heavy IT development effort.

In these pages, we shall look at a brief example.

## The starting point

In this example, we are going to start with a workbook that has ten different worksheets.

We shall analyse the workbook to check its contents, then run it through a conversion script.

From there, we shall make adjustments and complete the server.

Following this, we can build a web front-end that gives users a clear user interface.

## Analyse the workbook

When you analyse the existing workbook, there are some clear things to look out for.

## Structure 

The content of each workbook is essentially a simple grid.

The simplest way to convert the workbook is to allow each separate workbook to become a table. This is the default.

## Functions

Genesis can turn the key Excel functions into kotlin code for use by your application. This covers a lot of use cases. At present, we cannot translate VBA code, (there is none of that in our example).

Decide how you want to calculate the functions that are not translated for you. If data is being loaded from an external source, then you probably want to perform the calculations in the server. If the database is maintained internally, then you might prefer to do the calculations in the front end and only commit to the server on Save.

## Column headings

Column names will be turned into field names by the conversion process, which also analyses the content and allocates a field type for each one.

Long column headings do not make good field names. So, look at the headings in each sheet and replace the long ones with shorter text that makes better field names. It is quick to do this at the start than to wait until after the conversion.

You can now use this compliant version of the xls to start the conversion process.

## Convert the workbook

This is a simple command that produces a Genesis data model very quickly. The syntax is:

**ExcelToGenesis**

**-f, --file**	the name of the worksheet you are going to convert.

**-n –nam**e the name of the project (application) you want to create.

**-t –table**	each table is automatically given a unique numeric ID. Supply the opening sequence number, for example, 10000. Numeric IDs enable you to change the name of a table without losing the data.

So, for our example, we are going to run:

    ExcelToGenesis -f euc\ demo\ cash\ mgmt.xlsx -n cash -t 10000

The process is quick.It creates a number of tables and dictionaries using the application name you supplied.

Look at the Fields table. Note some large field names. Note automatic conversion of illegal characters (% sign to PERCENT for example) to make them Genesis-compliant. 

Look at the Tables file. The source of each table is included as a comment at the beginning.

The fields are automatically sampled by the command to allocate a type. If it is not sure, it allocates a the field as a strong. Most of these will be correct, but you will need to handle exceptions.

Each field in the table has a comment showing the column it came from and relevant notes on the function (e.g aggregation). Note the unable to parse field. You will have to deal with this, perhaps by creating a consolidator.

Primary key is the first column, by default. Note that it has handled a concatenation, where the primary key is created from the first two columns.

Table ids are sequential from the first one created, starting with the -t number supplied.

Look at the Views file.

The script has been able to find where tables need joins. Exceptions are highlighted.

It has been able to create derived fields. Example includes both IF statements and VAL.

It has been able to translate the abs function.