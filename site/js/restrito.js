window.addEventListener("load", (event) => {
    const token = localStorage.getItem('token');
    if (!token) {
        location.href = "index.html"; 
    }
});