using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Web.Services;
using StudentRegistrationApplication;
using StudentRegistrationApplication.Model;
using Newtonsoft.Json;
using MongoDB.Bson;
using System.Web.Script.Services;

namespace Web_AngularJSPRactise
{
    public partial class StudentRegistrationDetails : System.Web.UI.Page
    {
        #region Private Variables               
        static DbUtility oDAL = new DbUtility();
        static string sResult = string.Empty;
        #endregion

        #region WebMethods

        [WebMethod]
        [ScriptMethod(UseHttpGet = true)]
        public static string getAllStudent()
        {
            return oDAL.GetAllDocumentsWithObjectId("Student");
        }

        [WebMethod]
        public static bool saveStudent(string StudentObj)
        {
            return oDAL.SaveDocument(StudentObj, "Student");

        }
        [WebMethod]
        public static string findStudentById(string sid)
        {
            return oDAL.GetDocumentByIdWithObjectId("Student", "_id", ObjectId.Parse(sid));
        }
        [WebMethod]
        public static bool editStudent(string StudentObj)
        {
            return oDAL.UpdateDocumentByObjectId(StudentObj, "Student");

        }
        [WebMethod]
        public static bool delete(string sid)
        {
            return oDAL.DeleteDocumentByObjectId("Student", ObjectId.Parse(sid));
        }
        #endregion  

    }
}




