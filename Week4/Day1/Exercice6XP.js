(function(number_of_children, partners_name, geographic_location, job_title){
   const result =  `You will be a ${job_title} in ${geographic_location}, and married to ${partners_name} with ${number_of_children} kids`
    const Element = document.createElement("p")
    Element.textContent = result
    document.body.appendChild(Element)

    

})(2, "Emma", "New York", "Graphic Designer")