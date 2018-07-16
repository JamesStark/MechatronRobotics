$(document).ready(function() {
	$('#pay').click(function() {
		$('.spinner').show();
		// $('#edit-btn4').style.display = '';
		var element = document.getElementById('month1');
		var selectedValue = element.options[element.selectedIndex].text;
		var fd = new FormData(document.getElementById('training'));
		fd.append('amount', document.getElementById('total').value);
		fd.append('bd', document.getElementById('totalbd').value);
		fd.append('disc', document.getElementById('total_disc').value);
		fd.append('email', document.getElementById('emailst').value);
		fd.append('productinfo', document.getElementById('classst').value);
		fd.append('firstname', document.getElementById('namest').value);
		fd.append('phone', document.getElementById('contactst').value);
		fd.append('center', document.getElementById('centerst').value);
		fd.append('class_type', document.getElementById('classst').value);
		fd.append('month', document.getElementById('levelst').innerHTML);
		PAYMENT_SERVICE_URL = 'payment/';
		var token = secure['token'];
		$.ajax({
			type: 'POST',
			url: BASE_URL + PAYMENT_SERVICE_URL,
			enctype: 'multipart/form-data',
			processData: false,
			contentType: false,
			data: fd,
			headers: {
				Authorization: 'token ' + token
			},
			success: function(response) {
				$('.spinner').hide();
				// $(#edit-btn).show()
				$('#paymentdetails').html(response);
				document.getElementById('showHide1').disabled = true;
				document.getElementById('showHide2').disabled = true;
				document.getElementById('showHide3').disabled = true;
				document.getElementById('showHide4').disabled = true;
				document.getElementById('showHide5').disabled = true;
			},
			error: function(jqXHR, textStatus, errorThrown) {}
		});
	});
});

function setValueNone() {
	$('#total1').val(0);
	$('#total2').val(0);
	$('#total3').val(0);
	$('#total4').val(0);
	$('#total5').val(0);

	$('#disc1').val(0);
	$('#disc2').val(0);
	$('#disc3').val(0);
	$('#disc4').val(0);
	$('#disc5').val(0);

	$('#totalbd1').val(0);
	$('#totalbd2').val(0);
	$('#totalbd3').val(0);
	$('#totalbd4').val(0);
	$('#totalbd5').val(0);
}
function getTotalBeforeDiscount() {
	total_feebd =
		parseInt($('#totalbd1').val()) +
		parseInt($('#totalbd2').val()) +
		parseInt($('#totalbd3').val()) +
		parseInt($('#totalbd4').val()) +
		parseInt($('#totalbd5').val());
	$('#totalbd').val(total_feebd);
}

function getTotalAfterDiscount() {
	total_fee =
		parseInt($('#total1').val()) +
		parseInt($('#total2').val()) +
		parseInt($('#total3').val()) +
		parseInt($('#total4').val()) +
		parseInt($('#total5').val());
	$('#total').val(total_fee);
}

function getDiscountDetails(level, month, center) {
	DISCOUNT_SERVICE_URL = 'discount/' + level + '/' + month + '/' + center + '/';
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + DISCOUNT_SERVICE_URL,
		contentType: 'application/json; charset=utf-8',
		data: '{}',
		async: false,
		cache: false,
		dataType: 'json',
		headers: {
			Authorization: 'token ' + token
		},
		success: function(data) {
			$.each(data.data, function(i, item) {
				if (level == levels['lv1']) {
					$('#trainingfee1').val(item.actual_fee);
					$('#totalbd1').val(item.actual_fee);
					$('#total1').val(item.disc_fee);
					//$('#disc1').val(item.discount)
					$('#total_disc').val('You Got ' + item.discount + ' Discount');
					$('#discountgot').text(item.msg);
				} else if (level == levels['lv2']) {
					$('#trainingfee2').val(item.actual_fee);
					$('#totalbd2').val(item.actual_fee);
					$('#total2').val(item.disc_fee);
					//$('#disc2').val(item.discount)
					$('#total_disc').val('You Got ' + item.discount + ' Discount');
					$('#discountgot').text(item.msg);
				} else if (level == levels['lv3']) {
					$('#trainingfee3').val(item.actual_fee);
					$('#totalbd3').val(item.actual_fee);
					$('#total3').val(item.disc_fee);
					//$('#disc3').val(item.discount)
					$('#total_disc').val('You Got ' + item.discount + ' Discount');
					$('#discountgot').text(item.msg);
				} else if (level == levels['lv4']) {
					$('#trainingfee4').val(item.actual_fee);
					$('#totalbd4').val(item.actual_fee);
					$('#total4').val(item.disc_fee);
					//$('#disc4').val(item.discount)
					$('#total_disc').val('You Got ' + item.discount + ' Discount');
					$('#discountgot').text(item.msg);
				} else if (level == levels['lv5']) {
					$('#trainingfee5').val(item.actual_fee);
					$('#totalbd5').val(item.actual_fee);
					$('#total5').val(item.disc_fee);
					//$('#disc5').val(item.discount)
					$('#total_disc').val('You Got ' + item.discount + ' Discount');
					$('#discountgot').text(item.msg);
				}
			});
		},

		error: function(jqXHR, textStatus, errorThrown) {}
	});
}

function getDiscountByMultipleLevelSelection(level) {
	var chkid2 = document.getElementById('kitck2');
	var chkid3 = document.getElementById('kitck3');
	var chkid4 = document.getElementById('kitck4');
	var chkid5 = document.getElementById('kitck5');
	DISCOUNT_SERVICE_URL = 'discount/' + level + '/';
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + DISCOUNT_SERVICE_URL,
		contentType: 'application/json; charset=utf-8',
		data: '{}',
		async: false,
		cache: false,
		dataType: 'json',
		headers: {
			Authorization: 'token ' + token
		},
		success: function(data) {
			$.each(data.data, function(i, item) {
				setValueNone();
				$('#discountgot').text(item.msg);
				$('#totalbd').val(item.actual_fee);
				$('#total').val(item.disc_fee);
				$('#totalbd2').val(item.level_2);
				$('#totalbd3').val(item.level_3);
				$('#totalbd4').val(item.level_4);
				$('#totalbd5').val(item.level_5);
				$('#total_disc').val('You got ' + item.discount + ' Discount');
			});
		},

		error: function(jqXHR, textStatus, errorThrown) {}
	});
}

function validate() {
	var chk1 = document.getElementById('showHide1');
	var chk2 = document.getElementById('showHide2');
	var chk3 = document.getElementById('showHide3');
	var chk4 = document.getElementById('showHide4');
	var chk5 = document.getElementById('showHide5');
	var center = $('#centerst').val();
	var levels = getCheckBoxLevelValue();
	$('#levelst').text(levels);
	if (chk1.checked) {
		$('#month1').on('change', function(e) {
			var optionSelected = $('option:selected', this);
			var valueSelected = this.value;
			if (valueSelected == months['mon1'] || valueSelected == months['mon2']) {
				chk2.disabled = true;
				chk3.disabled = true;
				chk4.disabled = true;
				chk5.disabled = true;
			} else {
				chk2.disabled = false;
			}

			if (valueSelected == months['mon1']) {
				$('#discountgot').show();
				getDiscountDetails(chk1.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon2']) {
				$('#discountgot').show();
				getDiscountDetails(chk1.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon3']) {
				$('#discountgot').show();
				getDiscountDetails(chk1.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
				if (
					(chk1.checked && chk2.checked && chk3.checked) ||
					(chk2.checked && chk3.checked)
				) {
					getDiscountByMultipleLevelSelection(levels);
				}
			}
		});
		$('#discountgot').hide();
	}
	if (chk2.checked) {
		$('#month2').on('change', function(e) {
			var optionSelected = $('option:selected', this);
			var valueSelected = this.value;
			if (valueSelected == months['mon1'] || valueSelected == months['mon2']) {
				chk3.disabled = true;
				chk4.disabled = true;
				chk5.disabled = true;
			} else {
				chk3.disabled = false;
			}
			if (valueSelected == months['mon1']) {
				$('#discountgot').show();
				getDiscountDetails(chk2.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon2']) {
				$('#discountgot').show();
				getDiscountDetails(chk2.value, valueSelectedm, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon3']) {
				$('#discountgot').show();
				getDiscountDetails(chk2.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
				if (
					(chk1.checked && chk2.checked && chk3.checked) ||
					(chk2.checked && chk3.checked)
				) {
					getDiscountByMultipleLevelSelection(levels);
				}
			}
		});
	}

	if (chk3.checked) {
		$('#month3').on('change', function(e) {
			var optionSelected = $('option:selected', this);
			var valueSelected = this.value;
			if (valueSelected == months['mon1'] || valueSelected == months['mon2']) {
				chk4.disabled = true;
				chk5.disabled = true;
			} else {
				chk4.disabled = false;
			}

			if (valueSelected == months['mon1']) {
				$('#discountgot').show();
				getDiscountDetails(chk3.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon2']) {
				$('#discountgot').show();
				getDiscountDetails(chk3.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon3']) {
				$('#discountgot').show();
				getDiscountDetails(chk3.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
				if (
					(chk1.checked && chk2.checked && chk3.checked) ||
					(chk2.checked && chk3.checked)
				) {
					getDiscountByMultipleLevelSelection(levels);
				}
			}
		});
	}

	if (chk4.checked) {
		$('#month4').on('change', function(e) {
			var optionSelected = $('option:selected', this);
			var valueSelected = this.value;
			if (valueSelected == months['mon1'] || valueSelected == months['mon2']) {
				chk5.disabled = true;
			} else {
				chk5.disabled = false;
			}
			if (valueSelected == months['mon1']) {
				$('#discountgot').show();
				getDiscountDetails(chk4.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon2']) {
				$('#discountgot').show();
				getDiscountDetails(chk4.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon3']) {
				$('#discountgot').show();
				getDiscountDetails(chk4.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
				if (
					(chk1.checked && chk2.checked && chk3.checked && chk4.checked) ||
					(chk2.checked && chk3.checked && chk4.checked)
				) {
					getDiscountByMultipleLevelSelection(levels);
				}
			}
		});
	}

	if (chk5.checked) {
		$('#month5').on('change', function(e) {
			var optionSelected = $('option:selected', this);
			var valueSelected = this.value;

			if (valueSelected == months['mon1']) {
				$('#discountgot').show();
				getDiscountDetails(chk5.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon2']) {
				$('#discountgot').show();
				getDiscountDetails(chk5.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
			} else if (valueSelected == months['mon3']) {
				$('#discountgot').show();
				getDiscountDetails(chk5.value, valueSelected, center);
				getTotalBeforeDiscount();
				getTotalAfterDiscount();
				$('#pay').attr('disabled', false);
				if (
					(chk1.checked &&
						chk2.checked &&
						chk3.checked &&
						chk4.checked &&
						chk5.checked) ||
					(chk2.checked && chk3.checked && chk4.checked && chk5.checked)
				) {
					getDiscountByMultipleLevelSelection(levels);
				}
			}
		});
	}
	if (!chk1.checked) {
		$('.hiddenField1').fadeOut();
		$('#totalbd1').val(0);
		$('#total1').val(0);
		$('#total_disc').text(0);
		$('#discountgot').hide();
		getTotalBeforeDiscount();
		getTotalAfterDiscount();
	}
	if (chk1.checked) {
		$('.hiddenField1').fadeIn();
		// $("#levelst").val("Level 1");
	}
	var level1;
	if (chk2.checked) {
		$('.hiddenField2').fadeIn();
	}
	//   $("#level2").val("Level 2");
	if (!chk2.checked) {
		$('.hiddenField2').fadeOut();
		$('#totalbd2').val(0);
		$('#total2').val(0);
		$('#total_disc').text(0);
		$('#discountgot').hide();
		getTotalBeforeDiscount();
		getTotalAfterDiscount();
	}
	if (chk1.checked && chk2.checked) {
	}
	if (chk3.checked) {
		$('.hiddenField3').fadeIn();
		// $("#level3").val("Level 3");
	}
	if (!chk3.checked) {
		$('.hiddenField3').fadeOut();
		$('#totalbd3').val(0);
		$('#total3').val(0);
		$('#total_disc').text(0);
		$('#discountgot').hide();
		getTotalBeforeDiscount();
		getTotalAfterDiscount();
	}
	if (chk4.checked) {
		$('.hiddenField4').fadeIn();
	}
	if (!chk4.checked) {
		$('.hiddenField4').fadeOut();
		$('#totalbd4').val(0);
		$('#total4').val(0);
		$('#total_disc').text(0);
		$('#discountgot').hide();
		getTotalBeforeDiscount();
		getTotalAfterDiscount();
	}
	if (chk5.checked) {
		$('.hiddenField5').fadeIn();
	}
	// $("#level5").val("Level 4");
	if (!chk5.checked) {
		$('.hiddenField5').fadeOut();
		$('#totalbd5').val(0);
		$('#total5').val(0);
		$('#total_disc').text(0);
		$('#discountgot').hide();
		getTotalBeforeDiscount();
		getTotalAfterDiscount();
	}
	if (
		!(
			chk1.checked ||
			chk2.checked ||
			chk3.checked ||
			chk4.checked ||
			chk5.checked
		)
	)
		$('#discountgot').hide();
}
function getCheckBoxLevelValue() {
	var favorite = [];
	$.each($("input[name='chkbox[]']:checked"), function() {
		favorite.push($(this).val());
	});
	var checkBoxValue = favorite.join('+');
	return checkBoxValue;

	//alert(checkBoxValue)
}

$('#month1').on('change', function() {
	alert(this.value);
});

$(document).ready(function() {
	$('#logout').click(function() {
		localStorage.removeItem('storageName');
		window.location.href = '/../index.html';
	});
});

// $(document).ready(function(){
//     $("#showHide5").click(function() {
//  $("#pay").attr("disabled", !this.checked);
//    });
// })

// $(document).ready(function(){
// $("#showHide5").click(function() {
//     var checked_status = this.checked;
//     if (checked_status == true) {
//        $("#pay").removeAttr("disabled");
//     } else {
//        $("#pay").attr("disabled", "disabled");
//     }
// });
