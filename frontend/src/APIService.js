
export default class APIService {
    
    static LoginUser(body) {

      return fetch('http://127.0.0.1:8000/auth/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
        }, 
        body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


    static RegisterUser(body) {

      return fetch('http://127.0.0.1:8000/api/users/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
        }, 
        body:JSON.stringify(body)

      }).then(resp => resp.json())

    }

    static ChangeProfile(body, userID, token) {

      return fetch('http://127.0.0.1:8000/api/updateProfileUser/'+userID+'/', {
        'method':'PUT',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}`
        }, 
        body:JSON.stringify(body)

      }).then(resp => resp.json())

    }

    static ChangeUserDetails(body, userID, token) {

      return fetch('http://127.0.0.1:8000/api/updateProfileUserDetails/'+userID+'/', {
        'method':'PUT',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}`
        }, 
        body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


    static getUserID(tokenString,token) {
      return fetch('http://127.0.0.1:8000/api/userID/'+tokenString, {
        'method':'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
        }
      })
      .then(resp => resp.json())
    }

    static getProfile(userID,token) {
      return fetch('http://127.0.0.1:8000/api/users/'+userID, {
        'method':'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
        }
      })
      .then(resp => resp.json())
    }

    static getUserDetails(userID, token) {
      return fetch('http://127.0.0.1:8000/api/userDetails/'+userID, {
        'method':'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
        }
      })
      .then(resp => resp.json())
    }

    static getSpecialties(token) {
      return fetch('http://127.0.0.1:8000/api/specialties/', {
        'method':'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
        }
      })
      .then(resp => resp.json())
    }

    static getInterests(token) {
      return fetch('http://127.0.0.1:8000/api/interests/', {
        'method':'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
        }
      })
      .then(resp => resp.json())
    }


}