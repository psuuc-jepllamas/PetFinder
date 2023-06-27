const adminUname = 'admin-emman';
const adminPass = 'admin-emman';

function redirectToNewPage()
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == adminUname && password == adminPass)
    {
        window.location.href = 'dashboard.html';
        alert("Log in successful!");
    }
    else
    {
        alert("Account not found.");
        return;
    }
}