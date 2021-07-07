import { useEffect } from "react"

export default function Blog () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="blogpage">
      <h1>DFG(数字金融集团)成为 Polkastarter 理事会成员</h1>
      <h4>Mar 02, 2021</h4>
      <h4>By: XXX</h4>
      <p>Some of our services, and certain pages of the DFG Site, are available only to clients or users who have been authorized by us to access those services and web pages. Such authorization may require completion of an accredited investor questionnaire and satisfactory background information screening.</p>
      <p>Unauthorized use of any DFG Site and/or our systems, including, but not limited to, unauthorized entry into and/or any attempted access of DFG’s systems and/or any restricted areas of any of the DFG Site, misuse or sharing of passwords or misuse of any other information, is strictly prohibited. You may not use any DFG Site in any manner that could damage, disable, overburden, or impair any DFG Site or service or interfere with any other party’s use and enjoyment of any DFG Site or service. You may not attempt to gain unauthorized access to any DFG Site or service, computer systems or networks connected to any DFG Site or service, through hacking, password mining or any other means. You may not screen-scrape, data scrape and/or use any automated means to acquire data and/or information from our Sites. You agree that you will not engage in any activities related to any DFG Site that are contrary to these Terms of Service and/or any applicable laws or regulations. You agree to notify us immediately in the event that you learn or suspect that the security of your password may have been compromised. You further agree that you are responsible for any unauthorized use of your password that is made before you have notified us and we have had a reasonable opportunity to act on that notice. We reserve the right to suspend or cancel your password, even without receiving such notice from you, if we suspect that it is being used in an unauthorized or fraudulent manner.</p>
      <p>Notwithstanding the above, you are responsible for monitoring your use of the DFG Sites and should promptly report any unauthorized or suspicious activity to us at contact@dfg.group</p>
    </div>
  )
}