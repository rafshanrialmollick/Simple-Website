function getContactPage(req, res) {
  res.render("contact", { title: "Contact | MyWebsite" });
}
const userContactData = [];
function handleContactForm(req, res) {
  const { name, email, message } = req.body;
  console.log("Contact Form Submission:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  req.userContactData = { name, email, message };
  userContactData.push(req.userContactData);

  res.render("contact", { title: "Contact | MyWebsite", success: true });
}

function handleContactData(req, res) {
  res.json({
    success: true,
    totalContacts: userContactData.length,
    data: userContactData,
  });
}

module.exports = {
  getContactPage,
  handleContactForm,
  handleContactData,
};
