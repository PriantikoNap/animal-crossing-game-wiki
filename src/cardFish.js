import React from 'react'
import "./Global.css"

function cardFish(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3">
             <div className="wrapper">
          <div className="clash-card barbarian">
            <div className="clash-card__image clash-card__image--barbarian">
              <img src={props.img} alt="barbarian" />
            </div>
            <div className="clash-card__level clash-card__level--barbarian">Level 4</div>
<div className="clash-card__unit-name">{props.eng} / {props.jp}</div>
            <div className="clash-card__unit-description">
          
              
              <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div className="row">
                <div className="col-2" data-toggle="tooltip" data-placement="left" title="Location">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-navigation"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                </div>
                <div className="col-10">
                {props.location}
                </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-2" data-toggle="tooltip" data-placement="left" title="Shadow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <div className="col-10">
                {props.shadow}
                </div>
                </div>
                </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-2" data-toggle="tooltip" data-placement="left" title="Northern">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-drizzle"><line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>
                </div>
                <div className="col-10">
                {props.northern === "" ? "All Year" : props.northern+ " Month"}
                </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-2" data-toggle="tooltip" data-placement="left" title="Southern">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-umbrella"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path></svg>
                </div>
                <div className="col-10">
                {props.southern==="" ? "All Year " : props.southern+ " Month"}
                </div>
                </div>
                </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                </div>
                <div className="col-10">
                  {props.time ===  "" ? "All Day" : props.time}
                </div>
                </div>
                
              </li>
           
            </ul>
            </div>
      
            <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
              <div className="one-third">
                <div className="stat-extrasmall">{props.rare}</div>
                <div className="stat-value">Rarity</div>
              </div>
      
              <div className="one-third">
                <div className="stat">{props.cj}</div>
                <div className="stat-value">CJ</div>
              </div>
      
              <div className="one-third no-border">
                <div className="stat">{props.price}</div>
                <div className="stat-value">Price</div>
              </div>
      
            </div>
      
          </div> 
        </div>
        </div>
    )
}

export default cardFish
