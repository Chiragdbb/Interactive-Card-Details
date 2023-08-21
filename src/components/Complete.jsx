import comp from "../assets/icon-complete.svg"

const Complete = ({ setComplete, cardData }) => {
	function clickHandler() {
		setComplete(false);
		Object.keys(cardData).forEach((key) => {
			cardData[key] = "";
		});
	}

	return (
		<div className="w-full tablet:w-[300px] flex flex-col gap-y-4 justify-center items-center mr-20">
			<div>
				<img src={comp} alt="complete" />
			</div>
			<h1 className="text-2xl font-semibold tracking-wider mt-4">
				THANK YOU !
			</h1>
			<p className="font-semibold text-gray-400">
				We've added your card details
			</p>
			<button
				onClick={clickHandler}
				className="w-full py-3 mt-4 bg-veryDarkViolet text-lightGrayishViolet font-medium rounded-lg"
			>
				Continue
			</button>
		</div>
	);
};

export default Complete;
