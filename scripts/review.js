let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount) {
    reviewCount = parseInt(reviewCount) + 1;
} else {
    reviewCount = 1;
}

localStorage.setItem("reviewCount", reviewCount);
document.getElementById("reviewCount").textContent = reviewCount;
