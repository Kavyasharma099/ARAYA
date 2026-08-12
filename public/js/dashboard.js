document.getElementById('logout').addEventListener('click',async()=>{try{await fetch('/api/auth/logout',{method:'POST'})}finally{location.href='/login.html'}});
