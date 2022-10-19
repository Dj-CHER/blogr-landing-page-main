function Nav_MENU_Show(id)
{ 
    document.getElementById('CNL-1').style.visibility = 'hidden';
    document.getElementById('CNL-2').style.visibility = 'hidden';
    document.getElementById('CNL-3').style.visibility = 'hidden';
    document.getElementById('CNL-'+id).style.visibility = 'visible';
    document.getElementById('arrow-Connect-1').style.transform = 'rotate(0deg)';
    document.getElementById('arrow-Connect-2').style.transform = 'rotate(0deg)';
    document.getElementById('arrow-Connect-3').style.transform = 'rotate(0deg)';

    document.getElementById('arrow-Connect-'+id).style.transform = 'rotate(180deg)';
}

function Nav_MENU_Hide(id)
{ 

    document.getElementById('arrow-Connect-'+id).style.transform = 'rotate(0deg)';
    document.getElementById('CNL-'+id).style.visibility = 'hidden';
}

var open = 0;

function Nav_MENU_Show_mobile(id)
{
    let val = document.getElementById('nav-content-item-'+id).style.display;
    // Nav_MENU_Hide_mobile(1); 
    if(val === '' || val === 'none')
    {  
    document.getElementById('nav-content-item-1').style.display = 'none';
    document.getElementById('nav-content-item-2').style.display = 'none';
    document.getElementById('nav-content-item-3').style.display = 'none';
    document.getElementById('nav-content-item-'+id).style.display = 'block';
    
    document.getElementById('arrow-dark-1').style.transform = 'rotate(0deg)';
    document.getElementById('arrow-dark-2').style.transform = 'rotate(0deg)';
    document.getElementById('arrow-dark-3').style.transform = 'rotate(0deg)';

    document.getElementById('arrow-dark-'+id).style.transform = 'rotate(180deg)';
    }
    else
    {
    document.getElementById('nav-content-item-'+id).style.display = 'none';
    document.getElementById('arrow-dark-'+id).style.transform = 'rotate(0deg)';
    }
}


function Change_bars_X()
{
    let val = document.getElementById('icon-hamburger').style.color;
    if(val === '')
    {
        document.getElementById('icon-hamburger').src = './images/icon-close.svg';
        document.getElementById('icon-hamburger').style.color = 'black';
        document.getElementById('nav-content').style.display = 'flex';    
    }
    else
    {
        document.getElementById('icon-hamburger').src = './images/icon-hamburger.svg';
        document.getElementById('icon-hamburger').style.color = '';
        document.getElementById('nav-content').style.display = 'none';    

    }
    
}



function Mobile_view(x) {
    if (x.matches) { // If media query matches
        document.getElementById('illustration-editor').src = "./images/illustration-editor-mobile.svg";
        document.getElementById('illustration-laptop').src = "./images/illustration-laptop-mobile.svg";
        document.getElementById('intro-img-header').src = "./images/bg-pattern-intro-mobile.svg";

    } }

function Desktop_view(x) {
    if (x.matches) { // If media query matches
        document.getElementById('illustration-editor').src = "./images/illustration-editor-desktop.svg";
        document.getElementById('illustration-laptop').src = "./images/illustration-laptop-desktop.svg";
        document.getElementById('intro-img-header').src = "./images/bg-pattern-intro-desktop.svg";

    } 
  }