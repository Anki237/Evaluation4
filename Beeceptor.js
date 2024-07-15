///<reference types="cypress"/> 
describe('Requests of beeceptor', () => {
    const baseurl="https://crypto-wallet-server.mock.beeceptor.com";
    it('post1', () => {
        cy.request({
            method:'POST',
            url:baseurl+"/api/v1/register",
            body:{
                "username": "user123",
                "password": "securepassword",
                "email": "user@example.com"
            },
            headers:{
               "Content-Type":"application/json"
            }
         }).then((Response)=>{
            expect(Response.status).to.equal(200);
            cy.log(JSON.stringify(
               Response.body
            ))
         })
    });
    it('post2', () => {
        cy.request({
            method:'POST',
            url:baseurl+"/api/v1/login",
            body:{
                "username": "user123",
                "password": "securepassword"
            },
            headers:{
               "Content-Type":"application/json"
            }
         }).then((Response)=>{
            expect(Response.status).to.equal(200);
            cy.log(JSON.stringify(
               Response.body
            ))
         })
    });
    it('get1', () => {
        cy.request({
         method:'GET',
         url:baseurl+"/api/v1/balance",
         headers:{
            "Content-Type":"application/json"
         }
        }) .then((Response)=>{
         expect(Response.status).to.equal(200);
         cy.log(JSON.stringify(Response.body))
         

        })
     });
     it('get2', () => {
        cy.request({
         method:'GET',
         url:baseurl+"/api/v1/transactions",
         headers:{
            "Content-Type":"application/json"
         }
        }) .then((Response)=>{
         expect(Response.status).to.equal(200);
         cy.log(JSON.stringify(Response.body))
         

        })
     });
     it('post3', () => {
        
        cy.request({
            method:'POST',
            url:baseurl+"/api/v1/transactions",
            body:{
                "recipient_address": "0x1234567890ABCDEF",
                "amount": 5.0,
                "currency": "ETH"
            },

            headers:{
               "Content-Type": "application/json"
            }

        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    it('post4', () => {
        
        cy.request({
            method:'POST',
            url:baseurl+"/api/v1/transaction_fee",
            body:{
                "amount": 2.5,
                 "currency": "BTC",
                "recipient_address": "0x1234567890ABCDEF"
            },

            headers:{
               "Content-Type": "application/json"
            }

        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    it('get3', () => {
        cy.request({
            method:'GET',
            url:baseurl+"/api/v1/exchange_rates",
            headers:{
                "Content-Type":"application/json"}  
        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    
    
});