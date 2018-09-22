import React from "react"
import Header from "../components/header.js"
import Layout from "../components/layout";


export default () => (
    // <div style={{ color: `teal` }}>
    //     <Header HeaderText = "About Page"></Header>
    //     <h1>About Gatsby</h1>
    //     <p>Such wow. Very React.</p>
    // </div>
    <Layout>
    <div>
        <h1>About me</h1>
        <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    </div>
    </Layout>
)