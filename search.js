const places = ['rajapalayam','chennai','madurai','salem','erode','theni','ramanathapuram','villupuram',
                'viruthunagar','sivagangai','porur','saathur','nagapattinam','rameshwaram','naamakkal',
                'srivilliputhur','tiruchirappalli','coimbatore','thoothukudi','kanchipuram','karur',
                'pudukottai','tirunelveli','vellore','cuddalore','ooty','ambur','ranipet','pollachi',
                'neyveli','alandur','kanyakumari','sivakasi','thalaivaipuram','perambalur','gobichettipalayam',
                'nagercoil','edappadi','dharmapuri']
const srch_inp = document.getElementById('srch')
let srch_places = [];
function display_places(places){
    places.map((place)=>{
        const new_node = document.createElement('p')
        const node = document.createTextNode(place)
        new_node.appendChild(node)
        document.querySelector('#srch_win').appendChild(new_node)
        document.getElementById('srch_win').style.visibility = 'visible'
    })
}

const implementSearch = ()=>{
    const srch_val = srch_inp.value
    // console.log(srch_val)
    srch_places = []
    places.map((place)=>{
        for(let place_ind=0;place_ind<place.length;place_ind++){
            if(place[place_ind]===srch_val[0] && place_ind+(srch_val.length)<=place.length){
                if(place.substring(place_ind,place_ind+srch_val.length)===srch_val){
                    let already_present = ()=>{
                        for(let i=0;i<srch_places.length;i++){
                            if(srch_places[i]===place)  return 1
                        }
                        return 0
                    }
                    if(already_present()===0){
                        srch_places.push(place)
                    }
                }
            }
        }
    })
    const eles = document.getElementsByTagName('p')
    for(let i=0;i<eles.length;i++){
        eles[i].remove()
    }
    document.getElementById('srch_win').style.visibility = 'hidden'
    display_places(srch_places)
    const eless = document.getElementsByTagName('p')
    for(let i=0;i<eles.length-1;i++){
        eles[i].remove()
    }
    
    const ele = document.getElementsByTagName('p');
    for(let i=0;i<ele.length;i++){
        ele[i].addEventListener('click',function (){
            const city = ele[i].innerHTML;
            if(city==='chennai'){
                document.body.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg)`
            }
            else if(city==='rajapalayam'){
                document.body.style.backgroundImage = `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c1/ee/ce/road-to-ayyanar-falls.jpg?w=700&h=500&s=1)`
            }
            else if(city==='madurai'){
                document.body.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Meenakshi_Amman_West_Tower.jpg/1200px-Meenakshi_Amman_West_Tower.jpg)`
            }
            else if(city==='salem'){
                document.body.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Salem_Junction.jpg/280px-Salem_Junction.jpg)`
            }
            else if(city==="erode"){
                document.body.style.backgroundImage = "url(https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/04/26055700/smart-city-india-1568x905.jpg)"
            }
            else if(city==="theni"){
                document.body.style.backgroundImage = "url(https://renghaholidays.com/assets/images/tour/single/1609918298_d047e101534adaf13b3f.jpg)"
            }
            else if (city==='sivagangai'){
                document.body.style.backgroundImage = "url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/villupuram-district-1656588934_91f31e8f14a2f5da6ce9.webp)"
            }
            else{
                document.body.style.backgroundImage = "url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ramanathapuram-1655998479_c1f1dea9d836f7418bba.webp)"
            }
            document.getElementById('city').innerHTML = city.toUpperCase();
            document.getElementById('city').style.visibility = 'visible';
        })
    }
}
srch_inp.addEventListener('focus',implementSearch)
srch_inp.addEventListener('input',implementSearch)
srch_inp.addEventListener('blur',()=>{
    document.getElementById('srch_win').style.visibility = 'hidden';
})