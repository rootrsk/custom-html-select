console.log("Scrpit working")
var element = document.getElementById("selected-list");
var countries = ["India", "United State","Unted Kingdom ","Russia","Janpn"]
var selectedCountries = []
console.log(countries)
/**
 * 
 * @param { String } country a country name to be pushed in selected array
 * @returns 
 */
function select(country){
    if(selectedCountries.includes(country)) return
    selectedCountries.push(country)
    render()
    renderAll()
}
/**
 * Render all selected elements
 */
function render(){
    let childString = '';
    selectedCountries.map((country, index) => {
        console.log(index)
        childString += `
            <li>
                <span>${country}</span>
                <button index=${index} onclick="removeHandler('${country}')" >✕</button>
            </li>
        `
    })
    childString = childString + `<li class='input-li' id='input-li' ><input type="text" /></li>`
    childString += `<button class='clear-all' onclick="clearAll()" >✕</button>`
    element.innerHTML = childString
}
/**
 * 
 * @param { String } country removes that elements and render all selected elements
 */
function removeHandler(country){
    var filtered = selectedCountries.filter((ct)=>{
        return ct !== country
    })
    selectedCountries = filtered
    render()
    renderAll()
}
/**
 * clear all selected elements
 */
function clearAll () {
    selectedCountries = []
    render()
    renderAll()
}
/**
 * render all elements which is to be selected
 */
function renderAll () {
    var element = document.getElementById("selection-list");
    let childString = '';
    countries.map((country, index) => {
        console.log(index)
        childString += `
            <li class=${selectedCountries.includes(country)?'selected':'select'} onclick="select('${country}')">
                ${country}
            </li>
        `
    })
    element.innerHTML = childString
}
render()
renderAll()
