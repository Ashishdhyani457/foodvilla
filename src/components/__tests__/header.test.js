import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/store"
import {StaticRouter } from "react-router-dom/server"
test("logo should load on rendering",()=>{
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <Header/></Provider>
            </StaticRouter>)
    // console.log(header)
    const logo =header.getAllByTestId("logo")
    console.log(logo)
    expect(logo[0].src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5Ka0-XNdYuTzCUkpWsZMRodmZ04zGoTrgULI3FA&s")
})