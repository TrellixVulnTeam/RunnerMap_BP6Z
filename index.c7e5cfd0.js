!function(){class e{date=new Date;id=(Date.now()+"").slice(-10);clicks=0;constructor(e,t,n){this.coords=e,this.distance=t,this.duration=n}_setDescription(){this.description=`${this.type[0].toUpperCase()}${this.type.slice(1)} on ${["January","February","March","April","May","June","July","August","September","October","November","December"][this.date.getMonth()]} ${this.date.getDate()}`}click(){this.clicks++}}class t extends e{type="running";constructor(e,t,n,s){super(e,t,n),this.cadence=s,this.calcPace(),this._setDescription()}calcPace(){return this.pace=this.duration/this.distance,this.pace}}class n extends e{type="cycling";constructor(e,t,n,s){super(e,t,n),this.elevationGain=s,this.calcSpeed(),this._setDescription()}calcSpeed(){return this.speed=this.distance/(this.duration/60),this.speed}}const s=document.querySelector(".form"),o=document.querySelector(".workouts"),i=document.querySelector(".form__input--type"),a=document.querySelector(".form__input--distance"),r=document.querySelector(".form__input--duration"),u=document.querySelector(".form__input--cadence"),d=document.querySelector(".form__input--elevation");new class{#undefined;#undefined=13;#undefined;#undefined=[];constructor(){this._getPosition(),this._getLocalStorage(),s.addEventListener("submit",this._newWorkout.bind(this)),i.addEventListener("change",this._toggleElevationField),o.addEventListener("click",this._moveToPopup.bind(this))}_getPosition(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),(function(){alert("Could not get your position")}))}_loadMap(e){const{latitude:t}=e.coords,{longitude:n}=e.coords,s=[t,n];this.#undefined=L.map("map").setView(s,this.#undefined),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.#undefined),this.#undefined.on("click",this._showForm.bind(this)),this.#undefined.forEach((e=>{this._renderWorkoutMarker(e)}))}_showForm(e){this.#undefined=e,s.classList.remove("hidden"),a.focus()}_hideForm(){a.value=r.value=u.value=d.value="",s.style.display="none",s.classList.add("hidden"),setTimeout((()=>s.style.display="grid"),1e3)}_toggleElevationField(){d.closest(".form__row").classList.toggle("form__row--hidden"),u.closest(".form__row").classList.toggle("form__row--hidden")}_newWorkout(e){const s=(...e)=>e.every((e=>Number.isFinite(e))),o=(...e)=>e.every((e=>e>0));e.preventDefault();const c=i.value,l=+a.value,p=+r.value,{lat:_,lng:h}=this.#undefined.latlng;let k;if("running"===c){const e=+u.value;if(!s(l,p,e)||!o(l,p,e))return alert("Inputs have to be positive numbers!");k=new t([_,h],l,p,e)}if("cycling"===c){const e=+d.value;if(!s(l,p,e)||!o(l,p))return alert("Inputs have to be positive numbers!");k=new n([_,h],l,p,e)}this.#undefined.push(k),this._renderWorkoutMarker(k),this._renderWorkout(k),this._hideForm(),this._setLocalStorage()}_renderWorkoutMarker(e){L.marker(e.coords).addTo(this.#undefined).bindPopup(L.popup({maxWidth:250,minWidth:100,autoClose:!1,closeOnClick:!1,className:`${e.type}-popup`})).setPopupContent(`${"running"===e.type?"🏃‍♂️":"🚴‍♀️"} ${e.description}`).openPopup()}_renderWorkout(e){let t=`\n      <li class="workout workout--${e.type}" data-id="${e.id}">\n        <h2 class="workout__title">${e.description}</h2>\n        <div class="workout__details">\n          <span class="workout__icon">${"running"===e.type?"🏃‍♂️":"🚴‍♀️"}</span>\n          <span class="workout__value">${e.distance}</span>\n          <span class="workout__unit">km</span>\n        </div>\n        <div class="workout__details">\n          <span class="workout__icon">⏱</span>\n          <span class="workout__value">${e.duration}</span>\n          <span class="workout__unit">min</span>\n        </div>\n    `;"running"===e.type&&(t+=`\n        <div class="workout__details">\n          <span class="workout__icon">⚡️</span>\n          <span class="workout__value">${e.pace.toFixed(1)}</span>\n          <span class="workout__unit">min/km</span>\n        </div>\n        <div class="workout__details">\n          <span class="workout__icon">🦶🏼</span>\n          <span class="workout__value">${e.cadence}</span>\n          <span class="workout__unit">spm</span>\n        </div>\n      </li>\n      `),"cycling"===e.type&&(t+=`\n        <div class="workout__details">\n          <span class="workout__icon">⚡️</span>\n          <span class="workout__value">${e.speed.toFixed(1)}</span>\n          <span class="workout__unit">km/h</span>\n        </div>\n        <div class="workout__details">\n          <span class="workout__icon">⛰</span>\n          <span class="workout__value">${e.elevationGain}</span>\n          <span class="workout__unit">m</span>\n        </div>\n      </li>\n      `),s.insertAdjacentHTML("afterend",t)}_moveToPopup(e){if(!this.#undefined)return;const t=e.target.closest(".workout");if(!t)return;const n=this.#undefined.find((e=>e.id===t.dataset.id));this.#undefined.setView(n.coords,this.#undefined,{animate:!0,pan:{duration:1}})}_setLocalStorage(){localStorage.setItem("workouts",JSON.stringify(this.#undefined))}_getLocalStorage(){const e=JSON.parse(localStorage.getItem("workouts"));e&&(this.#undefined=e,this.#undefined.forEach((e=>{this._renderWorkout(e)})))}reset(){localStorage.removeItem("workouts"),location.reload()}}}();
//# sourceMappingURL=index.c7e5cfd0.js.map
