const questions = [
    {
        "question": "Next-Best-Action ensures that communication between the business and the customer is __________ and __________. (Choose Two)",
        "options": [
            "a) free of jargon",
            "b) contextual",
            "c) timely",
            "d) uniform and generic"
        ],
        "answer": ["b","c"]
    },
    {
        "question": "MyCo, a telecommunications company, wants to implement one-to-one customer engagement using Pega Customer Decision Hub™. Which of the following real-time channels can the company use to present Next-Best-Actions? (Choose Three)",
        "options": [
            "a) Billboard on the company building",
            "b) The call centre",
            "c) Traditional television advertisements",
            "d) SMS",
            "e) A retail store"
        ],
        "answer": ["b","d","e"]
    },
    {
        "question": "Which statement best describes the goal of Next-Best-Action?",
        "options": [
            "a) Provide insight into business processes.",
            "b) Ensure that every customer receives the same action.",
            "c) Balance customer needs with business objectives.",
            "d) Ensure that the customer is always given a desirable offer."
        ],
        "answer": "c"
    },
    {
        "question": "If the Pega Customer Decision Hub presents Next-Best-Action recommendations to a customer in a call-centre, the Next-Best-Action is re-evaluated when _______________, ___________, and ___________. (Choose Three)",
        "options": [
            "a) the service representative completes a task",
            "b) the service representative is in the middle of completing a task",
            "c) a customer responds to an offer",
            "d) the marketer retires an offer",
            "e) a customer changes the call context"
        ],
        "answer": ["a","c","e"]
    },
    {
        "question": "In a call-centre application that receives Next-Best-Actions to a customer from Pega Customer Decision Hub, the customer service representative (CSR) is _______________.",
        "options": [
            "a) guided on the next important conversation to have with the customer",
            "b) expected to improvise based on some basic customer information displayed on screen",
            "c) always expected to sell a product or service irrespective of the customer's call intent",
            "d) forced to follow a strict path of recommended steps, from which the CSR cannot deviate"
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank's marketing department wants to promote various auto loan offers to qualified customers on its website by using the Pega Customer Decision Hub™. The bank wants to show the offers on the customer's account page when customers log in to their account. The bank has defined several conditions customers must satisfy to see these auto loan offers. As a decisioning consultant, which two of the following configurations do you implement to achieve the business requirement? (Choose Two)",
        "options": [
            "a) Send promotional emails",
            "b) Define contact policy rules",
            "c) Create a segment",
            "d) Set up the business structure",
            "e) Create a decision strategy."
        ],
        "answer": ["b","d"]
    },
    {
        "question": "In an organization, customer actions are applicable to various business issues. What is the best way to organize them?",
        "options": [
            "a) Into a two-level hierarchy: Business issue > Actions",
            "b) Into a simple flat list including all actions",
            "c) Into a three-level hierarchy: Business issue > Group > Actions",
            "d) Into a two-level hierarchy: Group > Actions"
        ],
        "answer": "c"
    },
    {
        "question": "A bank wants to leverage Pega Customer Decision Hub’s Next-Best-Action capability to promote new offers to each customer on their website. Which artifact do you need to configure to manage the communication between the Customer Decision Hub and external channels?",
        "options": [
            "a) Event strategy",
            "b) Real-time Container",
            "c) Geofence",
            "d) Real-time Event"
        ],
        "answer": "b"
    },
    {
        "question": "A bank wants to present the Rewards Card offer on the top right of the customers’ account page when they log in. Select the placement type of the treatment design.",
        "options": [
            "a) Carousel",
            "b) Tile",
            "c) Footer bar",
            "d) Hero"
        ],
        "answer": "b"
    },
    {
        "question": "MyCo, a telco, wants to offer a Fibre Optic Cable package only to customers who live in towns that have fibre optic cable available. Which engagement policy condition best suits this requirement?",
        "options": [
            "a) Applicability",
            "b) Eligibility",
            "c) Suitability"
        ],
        "answer": "b"
    },
    {
        "question": "U+, a retail bank, does not want to offer a Gold card to customers who already have a Platinum card. Which engagement policy condition best suits this requirement?",
        "options": [
            "a) Applicability",
            "b) Suitability",
            "c) Eligibility"
        ],
        "answer": "a"
    },
    {
        "question": "U+, a retail bank, has recently implemented a project in which credit card offers are presented to qualified customers when they log in to the web self-service portal. They have unit-tests in place using persona tests. The bank has recently added new engagement policy conditions to present credit cards to qualified customers and re-executed the tests. They see failures in the tests. What do they do next?",
        "options": [
            "a) Accept that some of the tests are failing because of the changes",
            "b) Analyze test case failures, change them and re execute until everything is green",
            "c) Revert the engagement policy rules so that the persona tests not failing",
            "d) Remove the failing tests to ensure everything is green"
        ],
        "answer": "b"
    },
    {
        "question": "A bank wants to automatically pause actions that are shown too often for a specific time period. Which rules do you need to define?",
        "options": [
            "a) Suppression rules",
            "b) Eligibility rules",
            "c) Suitability rules",
            "d) Applicability rules"
        ],
        "answer": "a"
    },
    {
        "question": "A bank wants to add a contact policy that will suppress an action for 20 days if it was rejected twice in any channel in the last 30 days. How do you define the suppression rule for the contact policy?",
        "options": [
            "a) Suppress an action for 20 days if there are 2 rejects in the web channel in the last 30 days.",
            "b) Suppress a group of actions for 20 days if there are 2 rejects in the web channel in the last 30 days.",
            "c) Suppress a group of actions for 20 days if there are 2 rejects for any channel in the last 30 days.",
            "d) Suppress an action for 20 days if there are 2 rejects for any channel in the last 30 days."
        ],
        "answer": "d"
    },
    {
        "question": "A bank wants to sell more mortgages in the fourth quarter and is willing to offer mortgages even in situations where a credit card may have created more value. Which arbitration factor do you configure to implement this requirement?",
        "options": [
            "a) Suitability",
            "b) Business levers",
            "c) Applicability",
            "d) Eligibility"
        ],
        "answer": "b"
    },
    {
        "question": "Myco, a telecommunications company, has introduced new data plans for students. The company wants to present offers to customers based on the responses of a test group that already received the offer. Which arbitration factor do you configure to implement this requirement?",
        "options": [
            "a) Context weighting",
            "b) Business levers",
            "c) Action value",
            "d) Propensity"
        ],
        "answer": "d"
    },
    {
        "question": "MyCo, a telecommunications company, wants to present customers with a free 2GB data offer when contacting the call centre for mobile number portability. Which arbitration factor do you configure to implement this requirement?",
        "options": [
            "a) Context weighting",
            "b) Business levers",
            "c) Propensity",
            "d) Action value"
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank realizes that customers have ignored a particular mortgage offer. As a result, the bank wants to offer the action 30% more frequently. Which arbitration factor do you configure to implement this requirement?",
        "options": [
            "a) Action weighting",
            "b) Action value",
            "c) Context weighting",
            "d) Business purpose weighting"
        ],
        "answer": "a"
    },
    {
        "question": "Myco, a telco, currently promotes 24-month contracts with a free handset plus data plan, for example, MyPhone 11 and unlimited calls and data. The business structure has a sales issue/plans group that contains all actions, which are currently handsets. Now, the company wants to introduce some new plans without handsets. So, the term handsets no longer apply to the new actions. At what level in the hierarchy can you rename the plans to reflect the new situation?",
        "options": [
            "a) All levels",
            "b) Action level",
            "c) Issue level",
            "d) Group level"
        ],
        "answer": "d"
    },
    {
        "question": "U+ bank wants to leverage the Next-Best-Action capability of Pega Customer Decision Hub™ to promote new offers to each customer on their website. What information does Pega Customer Decision Hub send back to the website in response to the real-time container request?",
        "options": [
            "a) Only the action name and description",
            "b) Only the image location and its type",
            "c) Only the image location",
            "d) The treatment details and relevant action attributes"
        ],
        "answer": "d"
    },
    {
        "question": "U+ Bank, a retail bank, does not want to annoy customers by offering them a mortgage refinance option if they have less than 5% to pay off on their loan, although it would be profitable for the bank. Which engagement policy condition best suits this requirement?",
        "options": [
            "a) Eligibility",
            "b) Suitability",
            "c) Applicability"
        ],
        "answer": "b"
    },
    {
        "question": "A bank is currently displaying a group of mortgage offers to its customers on their website. The bank wants to suppress the mortgage group for 1 month if a customer ignores three mortgage offers within that group. How do you define the suppression rule for this requirement?",
        "options": [
            "a) Suppress an action for 30 days if there are 3 rejects for web channel.",
            "b) Suppress a group of actions for 30 days if there are 3 rejects for any channel.",
            "c) Suppress a group of actions for 30 days if there are 3 impressions for the web channel without a click.",
            "d) Suppress an action for 30 days if there are 3 impressions for any channel without a click."
        ],
        "answer": "c"
    },
    {
        "question": "The arbitration factor that allows you to assign financial values to actions is called: _________________________.",
        "options": [
            "a) action value",
            "b) business levers",
            "c) propensity",
            "d) context weighting"
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank has decided to nudge the Platinum Plus credit card to customers who visit their home page. Which arbitration factor do you configure to implement this requirement?",
        "options": [
            "a) Propensity",
            "b) Business levers",
            "c) Context weighting",
            "d) Action value"
        ],
        "answer": "b"
    },
    {
        "question": "U+, a retail bank, has recently implemented a project in which credit card offers are presented to qualified customers when they log in to the web self-service portal. To show the offers per the bank’s requirements, the bank added all existing contact policy conditions. What is the immediate next step they should take?",
        "options": [
            "a) Conduct numerous what-if simulations before going live.",
            "b) Add unit tests using persona testing before going live.",
            "c) Go live for a limited number of customers and check the performance on a daily basis.",
            "d) Go live for all customers and check the performance on a weekly basis."
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank wants to leverage Pega Customer Decision Hub's Next Best Action capability to promote new offers to each customer who visits the website based on eligibility. For this requirement, the bank needs to define several complex eligibility criteria.",
        "options": [
            "a) Use Prediction Studio to configure the requirement",
            "b) Make changes to the Next-Best-Action Framework decision strategy",
            "c) Configure suppression rules in Next-Best-Action Designer",
            "d) Create new decision strategies"
        ],
        "answer": "d"
    },
    {
        "question": "U+ Bank, a retail bank, offers the Standard card, the Rewards card and the Rewards Plus card to its customers. The bank wants to display the banner for the offer that each customer is most likely to click; therefore, their Arbitration uses Propensity from the AI models. If you are debugging the Next-Best-Action decision strategy, which strategy component will show you if the result of the Arbitration is correct?",
        "options": [
            "a) Prioritize",
            "b) Filter",
            "c) Group By",
            "d) Set Property"
        ],
        "answer": "a"
    },
    {
        "question": "A strategy designer has created 10 actions in the Sales/Credit Cards group and 10 actions in the Sales/Mortgages group. He would like to import all 10 actions from the Credit Cards group and only two actions from the Mortgage group into one decision strategy. What is the minimum number of Proposition Data components he needs to use in his strategy?",
        "options": [
            "a) twelve",
            "b) one",
            "c) two",
            "d) three"
        ],
        "answer": "d"
    },
    {
        "question": "U+ Bank wants to offer a 10% discount for customers whose CLV value is higher than 400. Which strategy component should you use to meet the new requirement?",
        "options": [
            "a) Group By",
            "b) Set Property",
            "c) Prioritize",
            "d) Filter"
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank has several eligibility criteria defined using an eligibility strategy. The eligibility strategy uses a scorecard rule to determine the customer credit score. The bank wants to update the scorecard to include customer income in the credit score calculations. How do you implement this change?",
        "options": [
            "a) Change only the decision strategy using the scorecard.",
            "b) Update only to the existing scorecard.",
            "c) Change both the scorecard as well as the decision strategy using the scorecard.",
            "d) Recreate the scorecard rule from scratch."
        ],
        "answer": "b"
    },
    {
        "question": "A bank is currently doing cross-sell on the web by showing various credit cards to its customers. Due to the credit limits of each card, the bank wants to present credit cards only to suitable customers who have a credit score greater than 500. Which component helps you to calculate a customer’s credit score?",
        "options": [
            "a) Set Property",
            "b) Results",
            "c) Scorecard",
            "d) Filter"
        ],
        "answer": "c"
    },
    {
        "question": "A bank developed a scorecard to automate the loan approval process. In a decision strategy, how do you use the raw score value computed by the scorecard?",
        "options": [
            "a) Use the pyOutcome property.",
            "b) Map a new property in the Score Mapping tab.",
            "c) Use the pxSegment property.",
            "d) Use the PropertyHasValue function."
        ],
        "answer": "b"
    },
    {
        "question": "A bank developed a scorecard to automate the loan approval process. In the scorecard rule, there is a classification implemented using three score bands: Not Approved, Refer to Manager, and Approved. Which property allows you to use the result of this classification in a decision strategy?",
        "options": [
            "a) PropertyHasValue",
            "b) pyOutcome",
            "c) pxSegment",
            "d) pyPropensity"
        ],
        "answer": "c"
    },
    {
        "question": "U+ Bank promotes credit card offers on its website and uses Pega Customer Decision Hub to personalize the offer for every customer. Now, the bank wants to lower the number of customers that leave the bank by showing a proactive retention offer to high churn risk customers instead. As an NBA analyst, you are tasked with creating a new applicability setting to comply with the new business rule. Which business issue or issues do you modify?",
        "options": [
            "a) The Retention issue",
            "b) The Sales issue",
            "c) No modification is required",
            "d) The Sales issue and the Retention issue"
        ],
        "answer": "d"
    },
    {
        "question": "For adaptive learning, what is the difference between parameterized predictors and non-parametrized predictor?",
        "options": [
            "a) None",
            "b) When parameterized predictors are highly correlated, they are not grouped",
            "c) The number of parameterized predictors is limited, while the number of non-parameterized predictors is unlimited",
            "d) Parameterized predictors do not influence propensity"
        ],
        "answer": "a"
    },
    {
        "question": "As a decisioning consultant, when you create and use a sub strategy, you can reference any strategy from the same page or another page.",
        "options": [
            "a) True",
            "b) False"
        ],
        "answer": "a"
    },
    {
        "question": "In a decision strategy, to use a customer property in an expression, you _______________.",
        "options": [
            "a) define the property as a strategy property",
            "b) prefix the property with the keyword Customer",
            "c) use the property as defined without a prefix",
            "d) define the Customer page in Pages and Classes"
        ],
        "answer": "b"
    },
    {
        "question": "In a Prioritize component, the top action can be determined based on the value of _______________.",
        "options": [
            "a) Customer.Value",
            "b) the propensity",
            "c) Primary.Income",
            "d) average margin of all actions"
        ],
        "answer": "b"
    },
    {
        "question": "What does a dotted line from a Group By component to a Filter component mean?",
        "options": [
            "a) Information from the Group By component is copied over to the Filter component.",
            "b) There is a one-to-one relationship between the Group By and Filter components.",
            "c) The Filter component references a property in the Group By component.",
            "d) Evaluate the Filter component first to evaluate the Group By component."
        ],
        "answer": "c"
    },
    {
        "question": "A bank is currently displaying a group of mortgage offers to its customers on their website. The bank wants to suppress the mortgage group for 15 days if a customer ignores three offers from the mortgage group. How do you define the suppression rule for this requirement?",
        "options": [
            "a) Suppress an action for 15 days if there are 3 impressions for any channel without a click.",
            "b) Suppress a group of actions for 15 days if there are 3 rejects for any channel.",
            "c) Suppress a group of actions for 15 days if there are 3 impressions for the web channel without a click.",
            "d) Suppress an action for 15 days if there are 3 rejects for web channel."
        ],
        "answer": "c"
    },
    {
        "question": "MyCo, a mobile company, uses a scorecard rule in a decision strategy to compute the post-paid credit limit for a customer. MyCo updated their scorecard to include a new property in the calculation: customer annual income. As a Strategy Designer, how would you change the decision strategy for the updated scorecard to take effect?",
        "options": [
            "a) Add a Set-Property component to set the annual customer income.",
            "b) No change required.",
            "c) Configure a new proposition filter in the strategy to filter on annual customer income.",
            "d) Remap the <Customer.annual customer income> property in the decision strategy."
        ],
        "answer": "b"
    },
    {
        "question": "U+, a retail bank, wants to show a retention offer to customers who are likely to leave the bank in the near future based on historical customer interaction data. Which type of model do you use to implement this requirement?",
        "options": [
            "a) A text analytics model",
            "b) An entity model",
            "c) An adaptive model",
            "d) A predictive model"
        ],
        "answer": "d"
    },
    {
        "question": "MyCo, a mobile company, wants you to calculate the total revenue of three new actions offered in the first quarter. What do you configure to compute the total revenue?",
        "options": [
            "a) Three Group By components",
            "b) A single Group By component",
            "c) Three Set property components",
            "d) A single Set Property component"
        ],
        "answer": "b"
    },
    {
        "question": "Enrichment decision components provide the ability to ______________________.",
        "options": [
            "a) enrich a decision strategy with comments",
            "b) set customer properties",
            "c) set a text value to a strategy property",
            "d) filter actions based on priority and relevance"
        ],
        "answer": "c"
    },
    {
        "question": "A marketer created a segment as the starting population for the outbound schedule. In Options and Schedule, she enabled the Refreshable Segment option. What does this option do?",
        "options": [
            "a) It allows other segments to automatically refresh the current segment when the other segments that reference it are run.",
            "b) It automatically refreshes all segments referenced by it.",
            "c) A refreshable segment is only populated when another segment refreshes it.",
            "d) Refreshable segments must not be used as the starting population in an always-on outbound schedule."
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank is currently running outbound communications for home loan offers and credit cards. They have added five new actions to the Credit Cards group. They would like to enable these actions in the email channel. What are the two minimum configurations that must be made? (Choose Two)",
        "options": [
            "a) Configure each action to reference a single action flow.",
            "b) Configure one action with an email treatment.",
            "c) Configure each action to reference its own action flow.",
            "d) Configure each action with an email treatment.",
            "e) Enable the email channel in Next-Best-Action->Channels."
        ],
        "answer": ["a","d"]
    },
    {
        "question": "For a limited time period, a bank wants to avoid sending promotional emails related to credit card offers to a customer if they have already received one. Which rule do you need to define to implement this business requirement?",
        "options": [
            "a) Volume constraints",
            "b) Customer contact limits",
            "c) Applicability rules",
            "d) Suppression policy"
        ],
        "answer": "d"
    },
    {
        "question": "Volume constraint is configured to apply constraints to actions as a group rather than for each action individually. A customer qualifies for 3 actions, and the volume limit on the top-ranked action is above zero, the limits on the 2 lower-ranked actions have been reached. Given this scenario, how many actions will be selected for the customer in the outbound run?",
        "options": [
            "a) 1",
            "b) 0",
            "c) 2",
            "d) 3"
        ],
        "answer": "a"
    },
    {
        "question": "A bank would like to write action details to a file so that it can be shared with a third-party email distributor. The bank has instructed their consultant to ensure the action details are finalized at the end of each run. In this context, what does finalization mean?",
        "options": [
            "a) All data in the file is the result of the last five runs.",
            "b) All data in the file is the result of a single run.",
            "c) All data in the file is the result of all the runs.",
            "d) All data in the file is the result of the first run."
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank currently uses Next-Best-Action Designer to manage 1:1 customer engagement in the web channel. The bank would like to promote the same offers in email. Which two additional configurations are needed in Next-Best-Action Designer to promote the offers in email? (Choose Two)",
        "options": [
            "a) Create a separate issue and group business structure in the taxonomy that is specific to email actions.",
            "b) Setup real-time container triggers to communicate with the email server.",
            "c) Configure the arbitration to boost prioritization of actions meant for email.",
            "d) Define the primary schedule.",
            "e) Ensure that the email channel is enabled."
        ],
        "answer": ["d","e"]
    },
    {
        "question": "A bank has chosen an email service provider to deliver the offer messages selected by Pega Customer Decision Hub. The service provider prefers that the bank uploads a file per batch of customers to a cloud storage location, either on Microsoft Azure or Amazon S3. As a consultant working on the project representing the bank, what is your response?",
        "options": [
            "a) Action details can be written directly to Amazon S3 but not Microsoft Azure.",
            "b) Action details can be directly written to either of those cloud storage solutions.",
            "c) Action details will be written to the local filesystem by default. But we will write an external process to transfer them to the cloud.",
            "d) Action details can only be transferred via secure FTP."
        ],
        "answer": "b"
    },
    {
        "question": "A bank has been running traditional marketing campaigns for many years. One such campaign sends an offer email to qualified customers on day 1. On day 3, it sends a reminder email to customers who haven't responded to the first email. On day 7, it sends a second reminder to customers who haven't responded to the first two emails. If you were to re-implement this requirement using the always-on outbound customer engagement paradigm, how would you approach this scenario?",
        "options": [
            "a) Configure the primary schedule to run daily and let the AI choose the best action from all the actions that a customer qualifies for based on engagement policies.",
            "b) Create three segments to identify the target audience for each of the three offer emails - day 1, day 3 and day 7. Setup three schedules per day targeting each of the three segments.",
            "c) Create an action with a flow that contains 3 Send Email shapes, one for each email. Set appropriate wait times between the shapes.",
            "d) Configure a primary schedule for the original offer email and setup an ad-hoc or emergency schedule to send reminder emails."
        ],
        "answer": "a"
    },
    {
        "question": "What is best practice for designing an action flow?",
        "options": [
            "a) When creating an action to be used as a flow template, set its availability to Always.",
            "b) Limit the number steps per channel to 3.",
            "c) When designing a flow to be reused across multiple actions, use the Specify Treatment option to configure it with a specific treatment.",
            "d) Always configure an action with its own flow."
        ],
        "answer": "b"
    },
    {
        "question": "Traditionally, segments were used to identify the target audience for a campaign. In the always-on approach, segments translate into ________________.",
        "options": [
            "a) engagement policies and AI",
            "b) segmentation",
            "c) contact policies",
            "d) actions and treatments"
        ],
        "answer": "a"
    },
    {
        "question": "A bank has several credit card offers defined under the sales issue / credit card group. The card_type action property for some of the cards is set to VISA and for others to Mastercard. The bank wants to limit the total number of VISA cards sent via email in an outbound run. How do you implement this requirement?",
        "options": [
            "a) Define a group-level constraint to limit all credit cards.",
            "b) Define an action-level constraint for each of the actions separately.",
            "c) Define a property constraint based on the value of the card_type action property.",
            "d) Move the VISA and Mastercard actions to separate groups, then define two separate volume constraints"
        ],
        "answer": "c"
    },
    {
        "question": "A bank is currently sending promotional emails related to credit card offers to qualified customers. Now the bank wants to prevent overexposure to these offers. As a part of this effort, the bank wants to avoid sending the same promotional offer email for the next 60 days if the email was rejected twice by the customer in the last 30 days. How do you define the suppression rule for this contact policy?",
        "options": [
            "a) Suppress a group of actions for 60 days if there are 2 rejects in the email channel in the last 30 days.",
            "b) Suppress an action for 60 days if there are 2 rejects in the email channel in the last 30 days.",
            "c) Suppress a group of actions for 60 days if there are 2 rejects in any channel in the last 30 days.",
            "d) Suppress an action for 60 days if there are 2 rejects in any channel in the last 30 days."
        ],
        "answer": "b"
    },
    {
        "question": "Which two of these statements are true about creating segments? (Choose Two)",
        "options": [
            "a) The list of customers in a segment can be viewed from within the segment",
            "b) A segment run can be triggered by the Next-Best-Action outbound schedule.",
            "c) The result of a criteria group can be combined with the result above it using AND and OR operators.",
            "d) In a segment you can reference customer properties OR another segment, but not both.",
            "e) When building the segment, if you want to know the count resulting from the criteria defined so far, the only way to do this is by running the segment."
        ],
        "answer": ["a","b"]
    },
    {
        "question": "U+ Bank’s marketing department currently promotes various credit card offers by sending emails to qualified customers. Now the bank wants to limit the number of emails sent to their customers irrespective of past outcomes with a particular offer and customer. Which of the following options allows you to implement this business requirement?",
        "options": [
            "a) Suitability rules",
            "b) Suppression policies",
            "c) Volume constraints",
            "d) Customer contact limits"
        ],
        "answer": "d"
    },
    {
        "question": "A U+ bank customer tries to initiate a fund transfer. Due to a slow internet connection, the transfer ends abruptly. The bank then sends an email with a link to continue the incomplete transaction. Which type of outbound interaction is this?",
        "options": [
            "a) Scheduled update",
            "b) Security event",
            "c) Customer event",
            "d) Priority communication"
        ],
        "answer": "c"
    },
    {
        "question": "Which statement is true about email treatments?",
        "options": [
            "a) When you design emails using external tools, you cannot include Pega-specific personalization tags.",
            "b) When you use a seed list to test an email, the personalization attributes do not appear in the received email.",
            "c) You must always embed the images in the email.",
            "d) You can personalize the email subject, for example, Dear <customer name>."
        ],
        "answer": "d"
    },
    {
        "question": "In which environment do you make business changes?",
        "options": [
            "a) Business operations",
            "b) Development",
            "c) Staging",
            "d) Production"
        ],
        "answer": "a"
    },
    {
        "question": "Which of the following is an example of an enterprise change?",
        "options": [
            "a) Introducing a new offer in the contact center",
            "b) Change the eligibility condition of the credit card offer",
            "c) Disabling an existing banner ad on the web channel",
            "d) Adding a new customer property to the customer data model"
        ],
        "answer": "d"
    },
    {
        "question": "What are two benefits of using Pega 1:1 Operations Manager? (Choose Two)",
        "options": [
            "a) Streamlining high-volume, business-as-usual changes",
            "b) Non-technical personnel have a safe environment in which to make business changes",
            "c) Ensure business users can carry out large, enterprise changes themselves",
            "d) Increased IT involvement in day-to-day business operations"
        ],
        "answer": "b"
    },
    {
        "question": "Who is responsible for creating a new change request?",
        "options": [
            "a) Team lead",
            "b) NBA specialist",
            "c) The system",
            "d) Business user"
        ],
        "answer": "d"
    },
    {
        "question": "What happens during the Build stage in the life cycle of a change request?",
        "options": [
            "a) The team lead builds the business operations team.",
            "b) The business user creates or updates an action.",
            "c) The next-best-action specialist creates or updates the next-best-action artifacts.",
            "d) The system creates or updates the next-best-action artifacts."
        ],
        "answer": "d"
    },
    {
        "question": "U+ Bank, a retail bank, is currently advertising the Cashback offer on its website. The bank now wants to retain customers whose average spent value is less than 2000. So, while continuing cross-selling on the web in its current configuration, the bank decides to send a cashback offer through a new channel, email, to only customers whose average spent value is less than 2000. What two tasks do you perform to update the cashback offer action? (Choose Two)",
        "options": [
            "a) Edit the action details.",
            "b) Edit an existing treatment.",
            "c) Remove the existing treatment.",
            "d) Add a new treatment.",
            "e) Edit an engagement policy."
        ],
        "answer": "d"
    },
    {
        "question": "U+ Bank, a retail bank, uses Pega Customer Decision Hub™ to cross-sell on the web by showing various credit card offers to its customers. The bank uses 1:1 Operations Manager and Pega Customer Decision Hub to fulfill the business-as-usual (BAU) requirements. The bank shows credit card offers based on existing engagement policies. Now, the bank wants to update the limit of the engagement policy from a credit score that is greater than 200 to a credit score that is greater than 250. Who initiates the change management process to fulfill this requirement?",
        "options": [
            "a) NBA Specialist",
            "b) Business User",
            "c) Revision Manager",
            "d) NBA Designer"
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank, a retail bank, uses Pega Customer Decision Hub™ to cross-sell on the web by showing various credit card offers to its customers. It uses 1:1 Operations Manager and Pega Customer Decision Hub to fulfill the BAU requirements. The bank already has defined an engagement policy to filter customers who receive credit card offers based on a decision table. U+ Bank now wants to change some ranges in the decision table. Who initiates the change management process to fulfill this requirement?",
        "options": [
            "a) Business User",
            "b) Revision Manager",
            "c) NBA Designer",
            "d) NBA Specialist"
        ],
        "answer": "b"
    },
    {
        "question": "Sequence the following tasks while keeping in mind the order in which they are executed in Pega 1:1 Operations Manager",
        "options": [
            "a) E → B → C → A → D",
            "b) A → B → C → E → D",
            "c) E → D → A → B → C",
            "d) E → A → C → B → D"
        ],
        "answer": "a"
    },
    {
        "question": "U+, a retail bank, has recently implemented a project in which credit card offers are presented to qualified customers when they log in to the web self-service portal. The bank now wants to divide an existing credit card offer range (250-600) into two ranges: 250-400 and 400-600. What is the recommended approach to implement this change?",
        "options": [
            "a) Create two change requests in 1:1 Pega Operations Manager.",
            "b) This requirement can be fulfilled only in Pega Customer Decision Hub.",
            "c) Create one change request in Pega 1:1 Operations Manager to change the engagement policy of the existing action and add a new action in the Customer Decision Hub portal.",
            "d) Create one change request in Pega 1:1 Operations Manager to add a new action, and change the engagement policy condition in the Customer Decision Hub portal"
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank, a retail bank, has recently implemented a project in which credit card offers are presented to qualified customers when they log in to the web self-service portal. The bank now wants to modify an offer’s contact policy from 7 days to 30 days. What is the best way to do this?",
        "options": [
            "a) Create a new change request in Pega 1:1 Operations Manager.",
            "b) Go to the Actions landing page in Pega Customer Decision Hub.",
            "c) Go to the Action details task in Pega 1:1 Operations Manager.",
            "d) Create a new action from the Constraints tab."
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank, a retail bank, has recently implemented a project in which credit card offers are presented to qualified customers when they log in to the web self-service portal. The bank now wants to introduce a group of special offers for Christmas under the Sales Business issue. How would you fulfill this requirement?",
        "options": [
            "a) Create a group using Pega Customer Decision Hub™ and maintain it using Pega 1:1 Operations Manager.",
            "b) Create and maintain a group of actions using Pega 1:1 Operations Manager.",
            "c) Create and maintain a group of actions using Pega Customer Decision Hub.",
            "d) Create a group using Pega 1:1 Operations Manager and maintain it using Pega Customer Decision Hub."
        ],
        "answer": "a"
    },
    {
        "question": "Myco, a telecom company, currently promotes 24-month contracts with a free handset plus data plan, e.g., MyPhone 11 + unlimited calls and data. The business structure has a sales issue/plans group that contains all actions, which are currently handsets. Now, the company wants to introduce some new plans without handsets. So, the term handsets no longer applies to the new actions. At what level in the hierarchy can you rename the plans to reflect the new situation?",
        "options": [
            "a) All levels",
            "b) Issue level",
            "c) Group level",
            "d) Action level"
        ],
        "answer": "c"
    },
    {
        "question": "A bank uses Pega Customer Service in its contact centre. When a call comes in, it is routed to a service representative. Once the service representative accepts the call, the Customer Decision Hub (CDH) determines the Next-Best-Action to be offered to the customer. What two pieces of information is used by the Customer Decision Hub to determine the Next-Best-Action recommendations? (Choose Two)",
        "options": [
            "a) Call context",
            "b) The previous customer’s profile",
            "c) The service representative’s profile",
            "d) Customer profile"
        ],
        "answer": ["a","d"]
    },
    {
        "question": "Through analysis of customer lifecycles, Next-Best-Action _______________.",
        "options": [
            "a) identifies global sales targets",
            "b) provides fulfillment services",
            "c) provides future sales reports",
            "d) anticipates retention issues"
        ],
        "answer": "d"
    },
    {
        "question": "In Pega Customer Decision Hub™, the characteristics of an action are defined by using",
        "options": [
            "a) Properties",
            "b) logos",
            "c) plain text",
            "d) banners"
        ],
        "answer": "a"
    },
    {
        "question": "To calculate the total number of customer responses of four actions in a group, you must use________________.",
        "options": [
            "a) four Group By components",
            "b) one Group By component",
            "c) four Set Property components",
            "d) one Set Property component"
        ],
        "answer": "b"
    },
    {
        "question": "MyCo, a telecom company, wants to present their customers on Facebook with customer-centric mobile internet offers. What action must MyCo take to meet this business requirement?",
        "options": [
            "a) Place a paid ad",
            "b) Make a call",
            "c) Send an email",
            "d) Create a Facebook post"
        ],
        "answer": "a"
    },
    {
        "question": "MyCo, a telecom company, wants to send promotional emails to give away phone accessories. The accessories can only be given away in batches of 50. When the stock in a batch is completed, a new batch can be promoted again. You have decided to use a volume constraint to limit the number of actions in a batch. To meet the business requirement, what Reset Interval setting do you select?",
        "options": [
            "a) When accessed",
            "b) Manual",
            "c) Daily",
            "d) Reset Interval does not matter for this scenario"
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank, a retail bank, follows all engagement policy best practices to present credit card offers on their website. The bank has introduced a new credit card offer, the Rewards card. Anna, an existing customer, currently holds a higher value card, Premier Rewards, and does not see the new Rewards card offer. What condition possibly prevents Anna from seeing the new Rewards card offer?",
        "options": [
            "a) Applicability",
            "b) Suppression rules",
            "c) Suitability",
            "d) Eligibility"
        ],
        "answer": "a"
    },
    {
        "question": "As a decisioning consultant, you advise the board on the business issues for which they must use the Next-Best-Action strategy. Which three business issues do you recommend? (Choose Three)",
        "options": [
            "a) Collections",
            "b) Service",
            "c) Retention",
            "d) Resource Planning",
            "e) Accounting"
        ],
        "answer": ["a","b","c"]
    },
    {
        "question": "MyCo, a telecom company, notices that when customers call to check on bill status, 80% of the time they received the wrong offer promotion, leading to customer dissatisfaction. The company decides to boost customers' needs in the prioritization formula to improve sales in the current quarter. Which arbitration factor do you configure to implement the requirement?",
        "options": [
            "a) Context weighting",
            "b) Propensity",
            "c) Business weighting",
            "d) Action value"
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank, a retail bank, wants to send promotional emails related to credit card offers to their qualified customers. The business intends to use the same action flow template with the desired flow pattern for all the credit card actions. What do you configure to implement this requirement?",
        "options": [
            "a) Output template",
            "b) Dynamic template",
            "c) File template",
            "d) Email treatment"
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank has recently introduced a few mortgage offers that are presented to qualified customers on its website. The business now wants to prevent offer overexposure, as overexposure negatively impacts the customer experience. Select the correct suppression rule for the requirement: If a customer is presented on the website with the same offer five times in the last 14 days, do not show the same offer to that customer for the next 10 days.",
        "options": [
            "a) Suppress an action for 10 days if there are five impressions for any channel in the last 14 days",
            "b) Suppress a group of actions for 10 days if there are five impressions for any channel in the last 10 days",
            "c) Suppress an action for 10 days if there are five impressions for web channel in the last 14 days",
            "d) Suppress an action for 14 days if there are five rejects for web channel in the last 10 days"
        ],
        "answer": "c"
    },
    {
        "question": "Myco, a telecom company, uses Pega Customer Decision Hub™ to present offers to qualified customers. The business recently decided to send offer messages through the email channel. The Design department has designed an email treatment which includes dynamic placeholders. As a decisioning consultant, what do you use in order to test the visualization and rendering of the email content, including replacing the placeholders with customer information?",
        "options": [
            "a) a list of customer email addresses from the Test Message tab",
            "b) schedule an outbound run with a limited number of customers",
            "c) preview section from the email content editor",
            "d) a seed list from the Test Message tab"
        ],
        "answer": "d"
    },
    {
        "question": "U+ Bank uses Pega Customer Decision Hub™ to display an offer to its customers on the U+ Bank website. The bank wants to ensure that Silver credit cards are not offered to customers under 27 years of age. They also want to ensure that Platinum cards are offered only to customers who had a positive balance in the last year. What do you configure in the Next-Best-Action Designer to achieve this outcome?",
        "options": [
            "a) Engagement policies",
            "b) Contact policy rules",
            "c) Customer segments",
            "d) Arbitration rules"
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank, a retail bank, presents various credit card offers to its customers on its website. The bank uses artificial intelligence (AI) to prioritize the offers based on customer behavior. Since introducing the Gold credit card offer, the offer click-through rate (propensity) has increased to 0.83. What does the increase in the propensity value most likely indicate?",
        "options": [
            "a) Similar customers have ignored the offer.",
            "b) Similar customers have shown interest in the offer.",
            "c) Similar customers have rejected the offer.",
            "d) Similar customers have purchased other offers ."
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank's marketing department currently promotes various home loan offers to qualified customers. Now, the bank does not want to show offers on a customer's account page if the customer has already received three home loan offers in the last two weeks. What do you need to define to implement the business requirement?",
        "options": [
            "a) Customer contact limits",
            "b) Suppression policy",
            "c) Volume constraints",
            "d) Applicability rules"
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank, a retail bank, uses Pega Customer Decision Hub™ for their one-to-one customer engagement. The bank now wants to change its offer prioritization to consider both business objectives and customer needs. Which two factors do you configure in the Next-Best-Action Designer to implement this change? (Choose Two)",
        "options": [
            "a) Business levers",
            "b) Engagement policies",
            "c) Context weighting",
            "d) Contact policies"
        ],
        "answer": "a"
    },
    {
        "question": "A customer contacts a bank to resolve a credit card dispute. After dispute resolution, Next-Best-Action displays a set of sales offers that a Customer Service Representative can present to the customer. Which feature of Next-Best-Action helps the Customer Service Representative decide on the offer to present to the customer?",
        "options": [
            "a) Call intent detection",
            "b) Offers ranking",
            "c) Dispute handling strategy",
            "d) Interaction history"
        ],
        "answer": "a"
    },
    {
        "question": "What is the name of the property that is automatically recomputed for each decision component?",
        "options": [
            "a) Rank",
            "b) Priority",
            "c) Order",
            "d) Propensity"
        ],
        "answer": "a"
    },
    {
        "question": "U+ Bank has launched a new credit card for all customers with a premium bank account. As a decisioning consultant, you need to create actions that involve the full customer life cycle: marketing, sales, and service. Which two valid actions do you create? (Choose Two)",
        "options": [
            "a) Credit card status",
            "b) No annual fee credit card",
            "c) 1% cash back credit card",
            "d) Credit card number"
        ],
        "answer": "b"
    },
    {
        "question": "Aggregation components provide the ability to________________.",
        "options": [
            "a) filter actions based on priority and relevance",
            "b) make calculations based upon a list of actions",
            "c) choose between actions",
            "d) set a text value to a strategy property"
        ],
        "answer": "b"
    },
    {
        "question": "To which types of decisions can Pega Customer Decision Hub™ be applied?",
        "options": [
            "a) Determining how to retain a customer",
            "b) Determining why response rates for a campaign in one region are below average",
            "c) Determining how to optimize the product portfolio to increase market share",
            "d) Determining the cause of a customer's problem"
        ],
        "answer": "c"
    },
    {
        "question": "U+ Bank, a retail bank, wants to begin promoting credit card offers via email to qualified customers. The business would like to ensure that the outbound run always uses the latest customer information. What do you configure to implement this requirement?",
        "options": [
            "a) Trigger an external ETL (Extract-Transform-Load) process",
            "b) Select Refresh the audience",
            "c) Run the starting population segment daily",
            "d) Select different audience sample with similar profile"
        ],
        "answer": "b"
    },
    {
        "question": "To reference a customer property in a strategy, you need to prefix the property name with the keyword______________.",
        "options": [
            "a) '. '",
            "b) 'Customer.'",
            "c) 'Data.'",
            "d) No prefix. Use directly the property name."
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank has recently implemented a cross-sell on the web microjourney and is satisfied with the results. The bank now wants these Next-Best-Action recommendations to be delivered via outbound communication channels. Select two outbound channels that U+ Bank can use to deliver Next-Best-Action recommendations. (Choose Two)",
        "options": [
            "a) Google",
            "b) Email",
            "c) Mobile application",
            "d) SMS",
            "e) Contact Center"
        ],
        "answer": ["b","d"]
    },
    {
        "question": "In the primary schedule recurrence configuration, what does the Refresh the audience option mean?",
        "options": [
            "a) It ensures that a new audience is selected for each run.",
            "b) It ensures that the latest customer information is used before running the schedule.",
            "c) It picks a different audience sample with a similar profile for the run.",
            "d) It triggers an external ETL (Extract-Transform-Load) process to refresh the audience."
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank is currently running email outbound communications for home loan offers and credit cards. They have added five new actions to the Credit Cards group. They would like to enable these actions in the email channel. What are the two minimum configurations that must be made? (Choose Two)",
        "options": [
            "a) Configure each action to reference its own action flow.",
            "b) Configure each action with an email treatment.",
            "c) Configure one action with an email treatment.",
            "d) Configure each action to reference a single action flow.",
            "e) Enable the email channel in Next-Best-Action->Channels."
        ],
        "answer": ["b","d"]
    },
    {
        "question": "A volume constraint is configured to apply constraints to actions as a group rather than for each action individually. A customer qualifies for 3 actions, and the volume limit on the top-ranked action is above zero. The limits on the 2 lower-ranked actions have been reached. Given this scenario, how many actions will be selected for the customer in the outbound run?",
        "options": [
            "a) 1",
            "b) 0",
            "c) 2",
            "d) 3"
        ],
        "answer": "a"
    },
    {
        "question": "A company wants to optimize the value of its customer relationships using Pega Customer Decision Hub™. By analysing customer lifecycles, Next-Best-Action can ____________. (Choose Two)",
        "options": [
            "a) help with resource planning",
            "b) automate loan acceptance",
            "c) predict product failure",
            "d) anticipate retention issues"
        ],
        "answer": ["b","d"]
    },
    {
        "question": "U+ Bank has a product eligibility matrix that defines what type of customers qualify for which offers when customers visit the bank's website. Which two components in the Next-Best-Action Designer allow you to define these conditions? (Choose Two)",
        "options": [
            "a) Channels",
            "b) Constraints",
            "c) Arbitration",
            "d) Engagement Policy"
        ],
        "answer": ["b","d"]
    },
    {
        "question": "U+ Bank has recently started using Pega Customer Decision Hub™ to display the first credit card offer, the Standard Card, to every customer who logs in to their website. Which three tasks do you need to perform to implement this requirement? (Choose Three)",
        "options": [
            "a) Set up business structure to Sales/CreditCards",
            "b) Define customer engagement policies",
            "c) Create and configure real-time container",
            "d) Create the action and its web treatment",
            "e) Define customer contact policies"
        ],
        "answer": ["a","d"]
    },
    {
        "question": "A financial institution has created a new policy that states the company will not send more than 500 emails per day. Which option allows you to implement the requirement?",
        "options": [
            "a) Volume constraints",
            "b) Customer contact limits",
            "c) Applicability rules",
            "d) Suppression policy"
        ],
        "answer": "a"
    },
    {
        "question": "When a customer is offered an action that they already accepted, this is because:",
        "options": [
            "a) the strategy is not customized to exclude previously accepted offers",
            "b) there are no suppression rules defined",
            "c) the actions are filtered based on eligibility",
            "d) the customer intent was captured incorrectly"
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank uses a scorecard rule in a decision strategy to compute the mortgage limit for a customer. U+ Bank updated their scorecard to include a new property in the calculation: customer income. What changes do you need to make in the decision strategy for the updated scorecard to take effect?",
        "options": [
            "a) Remap the scorecard property in the decision strategy for the change to take effect",
            "b) Add a new Group By component for the mortgage limit calculation",
            "c) The score calculation is independent of the strategy and no change is required",
            "d) A new proposition filter needs to be configured in the strategy to filter on customer income"
        ],
        "answer": "c"
    },
    {
        "question": "U+ Bank, a retail bank, wants to send promotional emails related to credit card offers to their qualified customers. You have already created an action flow template with the desired flow pattern and reused it for all the credit card actions. What must you do to ensure that this action is not selected for any customers?",
        "options": [
            "a) Set the action availability to Always",
            "b) Set the action availability to Never",
            "c) Set the action availability to Within a defined time period",
            "d) Set the action availability to Template"
        ],
        "answer": "b"
    },
    {
        "question": "U+ Bank, a retail bank, wants to show home loan offers to customers who login to their website. U+ Bank decides to use the Pega Customer Decision Hub. What information does the U+ Bank website receive in response to the real-time container request by Customer Decision Hub?",
        "options": [
            "a) Only the action name and description",
            "b) Only relevant action details and its treatment details",
            "c) Only the image location",
            "d) Only the image location and its placement type"
        ],
        "answer": "b"
    },
    {
        "question": "You are the decisioning consultant on an Al-powered one-to-one customer engagement implementation project. You are asked to design the next-best-action prioritization expression that balances the customer needs with the business objectives. What factor do you consider in the prioritization expression?",
        "options": [
            "a) Predicted customer behaviour",
            "b) Customer contact policy",
            "c) Offer eligibility",
            "d) Offer relevancy"
        ],
        "answer": "a"
    }
];