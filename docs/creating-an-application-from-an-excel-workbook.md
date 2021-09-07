---
id: 'Creating application from Excel '
title: Creating an application from an Excel workbook
sidebar_label: Creating an application from an Excel workbook

---
Operational functions sitting in Excel workbooks is a common occurrence in the financial sector. And it sometimes includes functions that are mission-critical.

The Genesis LCNC Platform gives you a way of turning these into applications that can be audited and maintained in a standard and controlled manner. Along the way, you can build in better workflow and usability without heavy IT development effort.

In these pages, we shall look at a brief example.

\##The starting point

In this example, we are going to start with a workbook that has ten different worksheets.

We shall analyse the workbook to check its contents, then run it through a conversion script.

From there, we shall make adjustments and complete the server.

Following this, we can build a web front-end that gives users a clear user interface.

\##Analyse the workbook

When you analyse the existing wrkbook, there are some clear things to look out for.

**Structure**. The content of each workbook is essentially a simple grid. 

The simplest way to convert the workbook is to allow each separate workbook to become a table. This is the default.

**Functions**. Genesis can turn a subset of functions into kotlin code for use by the application. This covers a lot of use cases. At present, we cannot translate VBA code, (there is none of that in our example).

Decide how you want to calculate the functions that are not translated for you. If data is being loaded from an external source, then you probably want to perform the calculations in the server. If the database is maintained internally, then you might prefer to do the calculations in the front end and only commit to the server on Save.

It is a good idea to make a compliant version of the xls – for example, shorter column names.