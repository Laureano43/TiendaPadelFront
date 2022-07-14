import '../css/Footer.css';

const FooterApp = () => {
    return (
        <>

<footer class="Pie Padre">
        <div>
            <h1 class="TextoPie Hijo">Seguinos en nuestras redes sociales...</h1>
        </div>
        <div>
            <a href="http://www.beelup.com" target="_blank" rel="noopener noreferrer"><img src="/images/Youtube.svg" class="FB" alt="Youtube"></img></a>          
            <a href="https://api.whatsapp.com/send?phone=+5493515481908&text=Hola%2C+me+gustaría+obtener+información+sobre+este+producto"  target="_blank" rel="noopener noreferrer"><img src="/images/Whatsapp.svg" class="FB" alt="Whatsapp"></img></a>      
            <a href="https://www.instagram.com/6060club/" target="_blank" rel="noopener noreferrer"><img src="/images/Facebook.svg" class="FB" alt="Facebook"></img></a>          
            <a href="https://instagram.com/6060club?utm_medium=copy_link" target="_blank" rel="noopener noreferrer"><img src="/images/Instagram.svg" class="IG" alt="Instagram"></img></a>
        </div>
</footer>        
        </>
        );    
};

export default FooterApp;