/// <reference types="cypress" />

import loginElements from '..//Elements/loginElements'
import logoutElements from '../Elements/logoutElements'
const Login = new loginElements
const Logout = new logoutElements  
const NavegadorUrl = Cypress.config("baseUrl")