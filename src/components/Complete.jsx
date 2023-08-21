import comp from "../assets/icon-complete.svg"

const Complete = ({ setComplete, cardData }) => {
	function clickHandler() {
		setComplete(false);
		Object.keys(cardData).forEach((key) => {
			cardData[key] = "";
		});
	}

	return (
		<div className="w-[340px] mx-auto sm:min-w-[460px] tablet:min-w-[200px] h-full tablet:w-[300px] flex flex-col gap-y-4 justify-center items-center tablet:mx-0 tablet:mr-0 min-[950px]:mr-16
		tablet:mt-0">
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
