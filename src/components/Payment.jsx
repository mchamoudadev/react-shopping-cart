import axios from "axios";
import { useState } from "react";
import useShop from "../ShopContext";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Payment = () => {
	const { total, clearCart } = useShop();
	const [phone, setPhone] = useState("");
	const [loading, setLoading] = useState(false);

	const initialState = {
		evc: false,
		zaad: false,
		sahal: false,
	};

	const [paymentMethod, setPaymentMethod] = useState(initialState);

	const submitForm = (event) => {
		event.preventDefault();
		if (JSON.stringify(paymentMethod) == JSON.stringify(initialState))
			return toast.error("Please Select payment method");

		if (phone.length < 9) return toast.error("Invlaid phone number");
		processPayment();
	};

	const processPayment = async () => {
		try {
			setLoading(true);
			const body = {
				schemaVersion: "1.0",
				requestId: "10111331033",
				timestamp: 1590587436057686,
				channelName: "WEB",
				serviceName: "API_PURCHASE",
				serviceParams: {
					merchantUid: process.env.REACT_APP_MERCHANT_U_ID,
					apiUserId: process.env.REACT_APP_MERCHANT_API_USER_ID,
					apiKey: process.env.REACT_APP_MERCHANT_API_KEY,
					paymentMethod: "mwallet_account",
					payerInfo: {
						accountNo: phone,
					},
					transactionInfo: {
						referenceId: "12334",
						invoiceId: "7896504",
						amount: total,
						currency: "USD",
						description: "React Shopping Cart",
					},
				},
			};
			const { data } = await axios.post(process.env.REACT_APP_END_POINT, body);
			setLoading(false);

			const info = data.responseMsg.split("ERRCODE");

			if (info.length == 1) {
				clearCart();
				toast.success("Thanks for shopping with us ...");
			} else {
				if (data.responseMsg.split("ERRCODE")[2].includes("4004")) {
					toast.error("User rejected");
				}

				if (data.responseMsg.split("ERRCODE")[2].includes("6002")) {
					toast.error("Numberka sirta ah waa khalad");
				}
			}
		} catch (err) {
			setLoading(false);
			toast.error(err);
		}
	};

	return (
		<div>
			<h2>Pay With</h2>

			<div className="payment-cards">
				<div
					className={`payment-card ${paymentMethod.zaad && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialState, zaad: true })}>
					<h3>Zaad Service</h3>
				</div>
				<div
					className={`payment-card ${paymentMethod.sahal && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialState, sahal: true })}>
					<h3>Sahal Service</h3>
				</div>
				<div
					className={`payment-card ${paymentMethod.evc && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialState, evc: true })}>
					<h3>Evc Plus</h3>
				</div>
				<form onSubmit={submitForm}>
					<input
						className="form-control"
						placeholder="2526......"
						onChange={(e) => setPhone(e.target.value)}
					/>
					<button disabled={loading} className="btn-proceed">
						{loading ? (
							<AiOutlineLoading3Quarters className="loading" />
						) : (
							"Proceed"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Payment;
