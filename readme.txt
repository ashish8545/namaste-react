# INSTALLING react test library issues
 - Requires node 18 and above - Mine was 16
 - Below error occured
        > npm install --save-dev @testing-library/react @testing-library/dom
        > npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded   
        because running scripts is disabled on this system. For more  
        information, see about_Execution_Policies at
        https:/go.microsoft.com/fwlink/?LinkID=135170.
        At line:1 char:1
        + npm install --save-dev @testing-library/react
        @testing-library/dom
        + ~~~
            + CategoryInfo          : SecurityError: (:) [], PSSecur  
        ityException
            + FullyQualifiedErrorId : UnauthorizedAccess

    Solution:
        - Execute this command in powershell as administrator
            > Set-ExecutionPolicy -Scope LocalMachine -ExecutionPolicy RemoteSigned
        - To see the List
            > Get-ExecutionPolicy -List
            Wherever we see Restricted allow it temperorily
        - Once done rever the policy permissions
            > Set-ExecutionPolicy -Scope LocalMachine -ExecutionPolicy Restricted

