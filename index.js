var moment = require('moment');
function getHeader(){
    headerHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
                body {
                 font-family: arial, helvetica, sans-serif;
                 font-size: 12px;
                 font-weight: normal;
                 color: black;
                 background: white;
                }
                th,td {
                 font-size: 10px;
                }
                h1 {
                 font-size: x-large;
                 margin-bottom: 0.5em;
                }
                h2 {
                 font-family: helvetica, arial;
                 font-size: x-large;
                 font-weight: bold;
                 font-style: italic;
                 color: #6020a0;
                 margin-top: 0em;
                 margin-bottom: 0em;
                }
                h3 {
                 font-family: helvetica, arial;
                 font-size: 16px;
                 font-weight: bold;
                 color: #b00040;
                 background: #e8e8d0;
                 margin-top: 0em;
                 margin-bottom: 0em;
                }
                li {
                 margin-top: 0.25em;
                 margin-right: 2em;
                }
                .hr {margin-top: 0.25em;
                 border-color: black;
                 border-bottom-style: solid;
                }
                .in    {color: #6020a0; font-weight: bold; text-align: left;}
                .frontend {background: #e8e8d0;}
                .s   {background: #e0e0e0;}
                .a0  {background: #FF99CC; font-weight: bold;}
                .a1  {background: #CCFF99;}
                .a2  {background: #CCFFFF;}
                .a3  {background: #CCCCFF;}
                .a4  {background: #66CCCC;}
                .a5  {background: #bbbbbb;}
                .a6  {background: #FFCC99;}
                .maintain {background: #c07820;}
                .rls      {letter-spacing: 0.2em; margin-right: 1px;}
                a.px:link {color: #ffff40; text-decoration: none;}
                a.px:visited {color: #ffff40; text-decoration: none;}
                a.px:hover {color: #ffffff; text-decoration: none;}
                a.lfsb:link {color: #000000; text-decoration: none;}
                a.lfsb:visited {color: #000000; text-decoration: none;}
                a.lfsb:hover {color: #505050; text-decoration: none;}
                table.tbl { border-collapse: collapse; border-style: none;}
                table.tbl td { text-align: right; border-width: 1px 1px 1px 1px; border-style: solid solid solid solid; padding: 2px 3px; border-color: gray; white-space: nowrap;}
                table.tbl td.ac { text-align: center;}
                table.tbl th { border-width: 1px; border-style: solid solid solid solid; border-color: gray;}
                table.tbl th.pxname { background: #b00040; color: #ffff40; font-weight: bold; border-style: solid solid none solid; padding: 2px 3px; white-space: nowrap;}
                table.tbl th.empty { border-style: none; empty-cells: hide; background: white;}
                table.tbl th.desc { background: white; border-style: solid solid none solid; text-align: left; padding: 2px 3px;}
                table.lgd { border-collapse: collapse; border-width: 1px; border-style: none none none solid; border-color: black;}
                table.lgd td { border-width: 1px; border-style: solid solid solid solid; border-color: gray; padding: 2px;}
                table.lgd td.noborder { border-style: none; padding: 2px; white-space: nowrap;}
                u {text-decoration:none; border-bottom: 1px dotted black;}
            </style>
    </head>
    <body>
        <h1>微医美SAAS2.0</h1>
        <hr />
        <h3>> 更新日志</h3>
        <table border="0">`
    return headerHtml
}

function getFooter(){
    footHtml = `</table>
    </body>
    </html>`
    return footHtml
}

var log = require('./log');
var options = {
    repo: __dirname,
    number: 2000,
    branch:'master',
    all:true,
    fields:[
        'hash',
        'subject',
        'authorName',
        'authorDate'
    ]
}
log(options, function(error, commits) {
    console.log(commits)
})
