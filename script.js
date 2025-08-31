
/* General Styling & Reset */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    direction: ltr; /* Changed to LTR for English */
    text-align: left; /* Changed to left for English */
    line-height: 1.6;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
}

/* Header Section */
.hero-section {
    position: relative;
    height: 70vh; 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
}

.hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: -1;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
}

.header-content {
    z-index: 1; /* Ensure content is above overlay */
    padding: 0 15px;
}

.header-content h1 {
    font-size: 2.8em; /* Adjusted for English text */
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    margin-bottom: 10px;
}

.hero-tagline {
    font-size: 1.3em;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

/* Products Section */
.products-section {
    padding: 50px 0;
}

.section-description {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 40px;
    line-height: 1.6;
    padding: 0 15px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    gap: 30px;
}

.product-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: translateY(-10px);
}

.product-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
}

.product-card h3 {
    font-size: 1.4em;
    margin-bottom: 10px;
    color: #007bff;
}

.social-proof {
    margin-bottom: 10px;
    color: #555;
    font-size: 0.9em;
}
.social-proof .fas {
    color: #007bff; /* Icon color */
    margin-left: 5px; /* Space between icon and text */
}

.product-rating .stars {
    color: #ffc107;
    font-size: 1.2em;
}

.product-rating .reviews {
    color: #777;
    font-size: 0.9em;
}

.customer-reviews {
    margin: 20px 0;
}

.customer-reviews blockquote {
    font-style: italic;
    color: #666;
    border-left: 3px solid #007bff; /* Changed to left for LTR */
    padding-left: 15px; /* Changed to left for LTR */
    margin-bottom: 10px;
    text-align: left; /* Ensure quotes are left-aligned */
}

.buy-button {
    display: block;
    width: 100%;
    padding: 15px;
    background-color: #28a745;
    color: white;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    transition: background-color 0.3s ease;
}

.buy-button:hover {
    background-color: #218838;
}
.buy-button .fas {
    margin-left: 8px; /* Space for the arrow icon */
}

/* FAQ Section */
.faq-section {
    background-color: #e9ecef;
    padding: 50px 0;
    text-align: center;
}

.faq-section h2 {
    font-size: 2em;
    margin-bottom: 30px;
}

.faq-item {
    background-color: white;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    text-align: left; /* Changed to left for English */
}

.faq-question {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    color: #007bff;
    display: flex; /* For icon alignment */
    justify-content: space-between; /* To push icon to the right */
    align-items: center;
}
.faq-icon {
    transition: transform 0.3s ease;
}
.faq-item.active .faq-icon {
    transform: rotate(45deg); /* Rotate plus to become an X/minus */
}


.faq-answer {
    margin-top: 15px;
    display: none; /* Hidden by default */
    text-align: left; /* Changed to left for English */
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .header-content h1 {
        font-size: 2em;
    }
    .hero-tagline {
        font-size: 1em;
    }
    .products-grid {
        grid-template-columns: 1fr; /* Stack products on smaller screens */
    }
}

@media (max-width: 480px) {
    .header-content h1 {
        font-size: 1.5em;
    }
    .product-card h3 {
        font-size: 1.2em;
    }
    .buy-button {
        font-size: 1em;
    }
}