const getNameValue = document.querySelector("#localstorage__form").addEventListener("submit", (e) => {
    e.preventDefault()
      const usesrName = e.target.elements.username.value
      const usesrPassword = e.target.elements.userpassword.value
      const usesrEmail = e.target.elements.useremail.value
      if(usesrName === "" || usesrPassword === "" || usesrEmail === ""){
    alert("Не залишайте рядок порожні")
      } else {
     const newUser = {
        name: usesrName,
        password: usesrPassword,
        email: usesrEmail
     }
    
     const archiveNewUser = JSON.stringify(newUser)
     localStorage.setItem("newUser", archiveNewUser)
     e.target.elements.useremail.value = ""
     e.target.elements.username.value = ""
     e.target.elements.userpassword.value = ""
    alert("Дякуємо")
      }
      document.querySelector(".localstorage__button").innerHTML = "Змінити дані"
    })

    document.querySelector("#reset").addEventListener("click", () => {
        localStorage.clear()
              document.querySelector(".localstorage__button").innerHTML = "Відправити"
              console.log("test")
    })
     