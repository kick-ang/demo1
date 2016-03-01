<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="StudentRegistrationDetails.aspx.cs"
    Inherits="Web_AngularJSPRactise.StudentRegistrationDetails" %>

<!DOCTYPE html>
<html>
<head>
    <title>Student Registation Details</title>   
    <link rel="stylesheet" href="/Styles/dashboard.css" />   
    <script src="../Scripts/angular.min.js" type="text/javascript"></script>
    <script src="../Scripts/angular-route.js" type="text/javascript"></script>
     <%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>--%>
    <link href="../Styles/bootstrap.min.css" rel="stylesheet" type="text/css" />    
     <script src="../Scripts/angular-messages.js" type="text/javascript"></script>
    <script src="../app.js" type="text/javascript"></script>
    <script src="../router.js" type="text/javascript"></script>
    <script src="../Controller/StudentRegDetails.js" type="text/javascript"></script>
    <script src="../Controller/ListStudentRegDetails.js" type="text/javascript"></script>
    <script src="../Scripts/checklist-model.js" type="text/javascript"></script>
    <script src="../Factories/getAllMastersFactory.js" type="text/javascript"></script>
    <script src="../Factories/studentRegFactory.js" type="text/javascript"></script>
    <script src="../JSON/Country.js" type="text/javascript"></script>
    <script src="../JSON/State.js" type="text/javascript"></script>
    <script src="../JSON/districtList.js" type="text/javascript"></script>
</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">               
                <a class="navbar-brand" href="#">Student Registration Form</a>
            </div>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="active"><a href="#">Menu <span class="sr-only">(current)</span></a></li>
                    <li><a href="#Add">Add new Student</a> </li>
                    <li><a href="#List">List Students</a> </li>
                   
                 
                </ul>
            </div>
            <div class="col-md-10 main">
                <div ng-view ng-app="myApp">
                    
                </div>
            </div>
        </div>
    </div>
</body>
</html>
