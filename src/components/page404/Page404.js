import React from 'react'
import './Page404.styles.scss'

export const Page404 = () => {

  return <div class="page_404">
    <div class="container">
      <div class="row">	
        <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center ">404</h1>		
            </div>
            
            <div class="contant_box_404">
              <h3 class="h2">
                Look like you're lost
              </h3>
              <a href="/"><button class="customButton">Go to Home</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}