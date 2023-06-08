 

function Contacts() {
	return (
	 
			<main>
				<div className="contacts">
					<div className="contact__info">
						<h1>Our Contacts</h1>
						<a href="tel:+380671234567">+380671234567"</a> <br />
						<a href="mailto:info@example.com">email:info@example.com</a>
					</div>
					<div className="map">
						<h2>Road to us</h2>
						<iframe
							title="maps"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40707.50800140178!2d30.44707073698729!3d50.38111126161789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5a63ea0f40b%3A0x9a166fc9cd1f005f!2z0KLQtdC90L3QtdGB0YHRliDQodGC0LXQudC6INCl0LDRg9GB!5e0!3m2!1suk!2sua!4v1686116954886!5m2!1suk!2sua"
							width="600"
							height="450"
							style={{ border: 0 }}
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</main>
		 
	);
}

export default Contacts;
