import { useState } from "react";
import Complete from "./Complete";

const CardDetails = () => {
	const [cardData, setCardData] = useState({
		cardHolderName: "",
		cardNumber: "",
		expMonth: "",
		expYear: "",
		cvc: "",
	});

	const [complete, setComplete] = useState(false);

	// todo: check input formats
	// todo: input fomat errors
	// const onlyValRegex = /^[0-9\s]+$/;
	// const onlyTextRegex = /^[A-Za-z]+$/;

	function changeHandler(event) {
		let { name, value } = event.target;

		// if (name !== "cardHolderName") {
		// 	if (!value.match(onlyValRegex)) {
		// 		console.log("character error");
		// 	}
		// }

		setCardData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		setCardData((prev) => {
			return prev;
		});
	}

	function submitHandler(event) {
		event.preventDefault();
		setComplete(true);
		console.log(cardData);
	}

	return (
		<div className="max-w-[1200px] py-4 pb-4 px-0 tablet:pb-0 tablet:px-12 min-h-screen mx-auto flex flex-col tablet:flex-row tablet:justify-between items-center">
			{/*  cards */}
			<div className="mx-auto tablet:mx-0 w-[340px] sm:min-w-[460px] tablet:w-[430px] h-full flex flex-col gap-y-0 tablet:gap-y-8 justify-center">
				<div className="relative bottom-14 tablet:bottom-0 z-10 w-[275px] tablet:w-[360px] h-fit order-1 tablet:-order-none">
					<img
						className="w-[52px] tablet:w-auto absolute tablet:left-6 left-4 top-4 tablet:top-6 z-20"
						src="/src/assets/card-logo.svg"
						alt="card-logo"
					/>
					<img src="/src/assets/bg-card-front.png" alt="card-front" />
					<div className="w-full text-white2 absolute bottom-2 left-0 z-50 px-5 tablet:px-6 py-2 tablet:py-4">
						<p className="max-w-full font-medium text-lg tablet:text-2xl tracking-widest">
							{cardData.cardNumber === ""
								? "0000 0000 0000 0000"
								: cardData.cardNumber}
						</p>
						<div className="w-full flex justify-between text-xs font-light tablet:font-normal tablet:text-sm mt-4 tablet:mt-6">
							<span className="uppercase">
								{cardData.cardHolderName === ""
									? "jane appleseed"
									: cardData.cardHolderName}
							</span>
							<span>{`${
								cardData.expMonth === ""
									? "00"
									: cardData.expMonth
							}/${
								cardData.expYear === ""
									? "00"
									: cardData.expYear
							}`}</span>
						</div>
					</div>
				</div>
				<div className="w-[280px] tablet:w-[360px] relative self-end z-0">
					<img src="/src/assets/bg-card-back.png" alt="card-back" />
					<p className="absolute right-[2.1rem] top-[3.9rem] tablet:right-12 tablet:top-[5.3rem] text-white z-50">
						{cardData.cvc === "" ? "000" : cardData.cvc}
					</p>
				</div>
			</div>

			{/* card details */}

			{complete && (
				<Complete setComplete={setComplete} cardData={cardData} />
			)}
			{!complete && (
				<form
					className="w-[340px] mx-auto sm:min-w-[460px] tablet:min-w-[200px] h-full flex flex-col gap-y-2 tablet:mr-6 min-[950px]:mr-16 -mt-2 tablet:mt-0 font-medium"
					onSubmit={submitHandler}
				>
					<label>
						<p className="uppercase text-xs tracking-widest font-bold text-veryDarkViolet">
							Cardholder name
						</p>
						<input
							className="rounded-md p-2 w-full mt-2 outline-lightGrayishViolet focus-visible:outline-grad1 gray-outline"
							required
							type="text"
							name="cardHolderName"
							placeholder="e.g. Jane Appleseed"
							onChange={changeHandler}
							value={cardData.cardHolderName}
						/>
					</label>
					<label>
						<p className="uppercase text-xs tracking-widest font-bold text-veryDarkViolet mt-4">
							Card Number
						</p>
						<input
							className="rounded-md p-2 w-full mt-2 outline-lightGrayishViolet focus-visible:outline-grad1 gray-outline"
							required
							type="text"
							name="cardNumber"
							placeholder="e.g. 1234 5678 9123 0000"
							onChange={changeHandler}
							maxLength={19}
							value={cardData.cardNumber
								.replace(/\s?/g, "")
								.replace(/(\d{4})/g, "$1 ")
								.trim()}
						/>
					</label>
					<div className="flex w-full mt-4">
						<label className="w-1/2">
							<p className="uppercase text-xs tracking-widest font-bold text-veryDarkViolet">
								Exp. Date (mm/yy)
							</p>
							<div className="flex justify-start gap-x-2 mt-2">
								<input
									className="rounded-md w-[40%] p-2 outline-lightGrayishViolet focus-visible:outline-grad1 gray-outline"
									required
									type="text"
									onChange={changeHandler}
									name="expMonth"
									placeholder="MM"
									maxLength={2}
									value={cardData.expMonth}
								/>
								<input
									className="rounded-md w-[40%] p-2 outline-lightGrayishViolet focus-visible:outline-grad1 gray-outline"
									required
									type="text"
									name="expYear"
									placeholder="YY"
									maxLength={2}
									onChange={changeHandler}
									value={cardData.expYear}
								/>
							</div>
						</label>
						<label className="w-1/2">
							<p className="uppercase text-xs tracking-widest font-bold text-veryDarkViolet">
								Cvc
							</p>
							<input
								className="w-full rounded-md mt-2 p-2 outline-lightGrayishViolet focus-visible:outline-grad1 gray-outline"
								required
								type="text"
								name="cvc"
								maxLength={3}
								onChange={changeHandler}
								placeholder="e.g. 123"
								value={cardData.cvc}
							/>
						</label>
					</div>
					<button className="w-full py-3 mt-5 tablet:mt-8 bg-veryDarkViolet text-lightGrayishViolet font-medium rounded-lg">
						Confirm
					</button>
				</form>
			)}
		</div>
	);
};

export default CardDetails;
