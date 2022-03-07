import React, { useState } from "react";
import "./card.css";


class Card extends React.Component {






	constructor(props) {
		super(props);
		this.state = {
			ccNumber: null


		};
	}

	/* Card Number Spacing */

	formatAndSetCcNumber(e)  {
		const inputVal = e.target.value.replace(/ /g, "");
		let inputNumbersOnly = inputVal.replace(/\D/g, "");

		if (inputNumbersOnly.length > 16) {
			inputNumbersOnly = inputNumbersOnly.substr(0, 16);
		}

		const splits = inputNumbersOnly.match(/.{1,4}/g);

		let spacedNumber = "";
		if (splits) {
			spacedNumber = splits.join(" ");
		}
		this.setState({ ccNumber: spacedNumber });
	}



	render() {
		return (
			<div>

				<div class="box">


					<div class="mdl">
						<div class="circles">
							<div class="circle circle-1"></div>
							<div class="circle circle-2"></div>
						</div>
						<h1 class="title">
							Please enter your credit card <br />details below
						</h1>

						<div class="card">

							<form>
								<div class="logo">



								</div>
								<div class="card-number">
									<label>Card Number</label>
									<input id="card-number" onChange={this.formatAndSetCcNumber.bind(this)} value={this.state.ccNumber} placeholder="1234 1234 1234 1234" type="text" required maxLength="19" />
									<span class="underline"></span>

								</div>
								<br />
								<div class="group">
									<div class="card-name">
										<label>Card Holder</label>
										<input id="card-name" placeholder="ISRAEL ISRAELI" type="text" required />
										<span class="underline"></span>

									</div>
									<div class="expiration-date">
										<label>Exp. Date</label>
										<input id="card-exp" placeholder="10/25" type="text" maxLength="5" required />
										<span class="underline"></span>

									</div>
									<div class="ccv">
										<label>CCV</label>
										<input id="card-ccv" placeholder="123" type="text" maxLength="3" required />
										<span class="underline"></span>
									</div>

								</div>
							</form>
						</div>
					</div>

				</div>
			</div>

		);
	}
}


function onAction() {

	var el = document.getElementById("card-number");

	el.innerHTML = el.value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');



}




//	$('#card-number').on('copy cut paste', function() {
//		setTimeout(function() {
//			$('#card-number').trigger("change");
//		});
//	});
//
//
//	/* Exp. Date Slash */
//
//	$('#card-exp').on('input', function() {
//		var curLength = $(this).val().length;
//		if (curLength === 2) {
//			var newInput = $(this).val();
//			newInput += '/';
//			$(this).val(newInput);
//		}
//
//
//	});

// var characterCount
// $('#card-exp').on('input',function(e){
//     if($(this).val().length == 2 && characterCount < $(this).val().length) {
//         $(this).val($(this).val()+'/');
//     }
//     characterCount = $(this).val().length
// });






export default Card;