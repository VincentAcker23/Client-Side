function showAll(selectList) {
    let options = selectList.options;
    let optionLength = options.length;
    for (let i = 0; i < optionLength; i++) {
        options[i].style.display = "block";
    }
}

function filterSelect(selectList, category) {
    let options = selectList.options;
    let optionLength = options.length;
    for (let i = 0; i < optionLength; i++) {
        if (options[i].className === category || i === 0) {
            options[i].style.display = "block";
        } else {
            options[i].style.display = "none";
        }
    }
}

selectVehicle.onclick = function() {
    let yearText = year.options[year.selectedIndex].text;
    let makeText = make.options[make.selectedIndex].text;
    let modelText = model.options[model.selectedIndex].text;
    let trimText = trim.options[trim.selectedIndex].text;
    vehicle.textContent = `${yearText} ${makeText} ${modelText} ${trimText}`;
};