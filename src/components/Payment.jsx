import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

const Payment = () => {
	const [phone, setPhone] = useState("");
	const [loading, setLoading] = useState(false);
	const [update, setUpdate] = useState(false);

	useEffect(() => {}, [update]);

	return (
		<div>
			<h2>Pay With</h2>

			<div className="payment-cards">
				<div className={`payment-card`}>
					<h3>Zaad Service</h3>
				</div>
				<div className={`payment-card selected`}>
					<h3>Sahal Service</h3>
				</div>
				<div className={`payment-card`}>
					<h3>Evc Plus</h3>
				</div>
				<form>
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
