var images =
["nanima.jpg","baba kol.jpg", "maa kol.jpg", "baba sil.jpg", "papa.jpg", "amu pink dress.jpg", "mumma.jpg"];
var names=["Shanti devi bihani"," ArunJhanwar","Pramila Jhawar","Muna Lal Bihani", "Saurav Jhanwar", "Amayraa Jhawar", "Sarita Jhanwar"];
var i=1; var numbers_of_family_member_in_array = 7;
function update()
{
    
   
    if (i == 7)
    {
        i=0;
    }
   
    var updateimage= images[i];
    var updatename= names[i];
    document.getElementById("family_member_image").src=updateimage;
    document.getElementById("family_member_name").innerHTML=updatename;i++;
}