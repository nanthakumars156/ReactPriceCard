
import React from 'react'

export default function Card(props){
    return (
    <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.title}</h5>
      <h6 className="card-price text-center">{props.cardData.price}<span className="period">/month</span></h6>
      <hr/>
      <ul>
        <li>{props.cardData.user}</li>
        <li>{props.cardData.storage}</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        <li className={props.cardData.project} ><span><i className={props.cardData.projectIcon} ></i></span>Unlimited
          Private Projects</li>
        <li className={props.cardData.phone}><span><i className={props.cardData.phoneIcon}></i></span>Dedicated
          Phone Support</li>
        <li className={props.cardData.subDomain}><span><i className={props.cardData.subDomainIcon}></i></span>{props.cardData.domain}
        </li>
        <li className={props.cardData.monthly}><span><i className={props.cardData.monthlyIcon}></i></span>Monthly Status
          Reports</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>);

}