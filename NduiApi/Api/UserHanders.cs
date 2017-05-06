using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using NordNeige;

namespace NduiApi.Web.Api
{
    public class UserHanders : ServerBase
    {

        [AjaxBase(MethodDesc = "系统登录")]
        public object Login(string username, string password, string code)
        {
            if (username == "admin" && password == "admin")
            {
                UsersLogin.SaveLogin(username, username);

                UsersLogin.SetPermission(PermissionType.Administrator);
                UsersLogin.SetPermission(PermissionType.Developer);
                UsersLogin.SetPermission(PermissionType.System);
                UsersLogin.SetPermission(PermissionType.Developer);
                ResponseModel.url = nd.Site.Url;
                return User.UserCode;
            }
            return null;
        }
    }
}
