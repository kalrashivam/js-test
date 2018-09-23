import React from "react"
import Layout from "../components/layout.js"
import Wrapper from "../components/wrapper"
import Controls from "../components/controls"
import Slidetray from "../components/slide-tray"
import Slide from "../components/slide"
import Card from "../components/card"

export default () => (
  <div>
    <Layout>
      <Wrapper>
        <Controls />
        <Slidetray>
                    <Slide>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                      
                    </Slide>            
                    <Slide>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>

                    </Slide>   
                    <Slide>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>

                    </Slide>   
                    <Slide>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>

                    </Slide>   
        </Slidetray>
      </Wrapper>
    </Layout>
  </div>
)
