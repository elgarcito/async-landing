/*

//Rapi api, apis gratis que se pueden conectar para practicar 
//con proyectos

//hago una constante con la url
const API='https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=OjZ1B_-cSHA&part=id%2Csnippet&type=video&maxResults=5'

const content= null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f57f1cc664mshad4e963db40e45ep10347djsn0b2fa304124e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


// hacemos el llamado de la url y los datos 
async function fetchData(urlApi) {
    const response =await fetch(urlApi,options);
    const data =await response.json();
    return data;
}

//funcion anonima que se llama a si misma y desencadena todo lo que queremos
//tiene estructurea de arrow function
//cuando carga este archivo automaticamente carga la funcion

(async ()=> {
    try {
        const videos =await fetchData(API);
        //base de forma tal en la que represnta un enlace
        //genero un template que me permita iterar por los elementos
        //para eso creo un valor llamado view 
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.tittle}
                </h3>
            </div>
         </div>
        
            `).slice(0,4).join('')}

        `;

        content.innerHTML=view;
    } catch(error) {
        console.log(error);

    }

})();
*/


const API='https://youtube-v31.p.rapidapi.com/search?channelId=UCCcMBI7rksl75yaARqnJWfQ&part=snippet%2Cid&order=date&maxResults=10';

const content=null||document.getElementById('content');

const options={
    method:'GET',
    headers:{   'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com',
                'X-RapidAPI-Key':'f57f1cc664mshad4e963db40e45ep10347djsn0b2fa304124e'}
            };



async function fetchData(urlApi){
    const response=await fetch(urlApi,options);
    const data=await response.json();
    return data;}



(async()=>{try{const videos=await fetchData(API);let view=`
    ${videos.items.map(video=>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}
    `;content.innerHTML=view;}catch(error){console.log(error);}})();


    //foto de perfil de facebook
    //https://scontent.faep9-2.fna.fbcdn.net/v/t1.6435-1/65960379_2365415213497686_9067504942083735552_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=Gf8xkcxtCUMAX-PhTa5&_nc_ht=scontent.faep9-2.fna&oh=00_AT9NBFp9tLGl-1MP2XO3rAhzqHBlV2Z2uHCjL6LpoFuDFg&oe=6325D873