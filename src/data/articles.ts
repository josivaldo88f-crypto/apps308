import type { Locale } from './i18n';
export interface Article { id:string;app:string;category:string;slug:string;title:string;description:string;intro:string;sections:{heading:string;paragraphs:string[];source?:{title:string;url:string};cta?:{label:string;url:string;sponsored?:boolean}}[];steps:string[];pros:string[];cons:string[];faq:{q:string;a:string}[];verdict:string;imageAlt:string;caption:string;imageKey?:string;imageWide?:boolean;secondImage?:{key:string;alt:string;caption:string;wide?:boolean}; }
export const articles:Record<Locale,Article[]>={
  "en": [
    {
      "id": "lens",
      "app": "lens",
      "category": "tools",
      "slug": "how-to-use-google-lens",
      "title": "Google Lens: a smarter way to search what you see",
      "description": "Search by image, copy text and translate with Google Lens. Learn how to use it on your phone and make sense of the results.",
      "intro": "Google Lens turns an image into a starting point for a search. Instead of guessing the name of a plant, typing a long passage or describing an object, you can start with a photo. The useful part is knowing which result to trust and when a visual match needs another check.",
      "sections": [
        {
          "heading": "What Google Lens can help you do",
          "paragraphs": [
            "Lens can search for similar objects, recognize text and translate words in an image. You can access it through the Google app on supported Android and iOS devices; the exact entry point and available features vary by device. A picture already saved on your phone can be a useful starting point, too.",
            "A visual match is a lead to investigate. Compare details and read the original page before relying on an identification. Similar packaging, lighting and incomplete text can lead to misleading results."
          ]
        },
        {
          "heading": "Copying and translating text",
          "paragraphs": [
            "Frame a clear, well-lit passage and select the text Lens recognizes. Check line breaks, numbers and unfamiliar names before pasting it elsewhere. For translation, compare the result with the original and keep context in mind.",
            "Avoid uploading confidential documents just to save a little typing. Use a non-sensitive example while learning the controls. Google explains visual search history options in its help documentation; review those settings if you want to understand how searches may be saved."
          ]
        }
      ],
      "steps": [
        "Open the Google app and look for the Lens camera icon in the search bar.",
        "Choose an existing image or frame an object with the camera, granting only the access you need.",
        "Adjust the selection so that the relevant object or text fills the frame.",
        "Open the source behind a result, or select and review text before copying or translating."
      ],
      "pros": [
        "Starts a search when you do not know the right words.",
        "Combines visual discovery with practical text tools."
      ],
      "cons": [
        "An image match can be wrong or lack context.",
        "Features and controls differ across devices."
      ],
      "faq": [
        {
          "q": "Do I have to pay to use Google Lens?",
          "a": "Google Lens is free. You can access it from the Google app on supported devices."
        },
        {
          "q": "Can I use a photo already on my phone?",
          "a": "Yes. Google documents using existing photos and screenshots, as well as the camera, with supported Lens entry points."
        },
        {
          "q": "Is the result always accurate?",
          "a": "No. Treat it as a search result and verify the original source, especially for consequential decisions."
        }
      ],
      "verdict": "A useful everyday shortcut for searching and handling text. Start with a simple photo and check the source behind the answer.",
      "imageAlt": "Google Lens",
      "caption": "Google Lens lets you start a search from an image."
    },
    {
      "id": "opinion",
      "app": "opinion",
      "category": "rewards",
      "slug": "google-opinion-rewards-how-it-works",
      "title": "Google Opinion Rewards: how surveys and Play credit work",
      "description": "Understand Google Opinion Rewards on Android, Google Play credits, eligibility and survey availability before you spend time answering surveys.",
      "intro": "Google Opinion Rewards offers rewards for eligible surveys, but it is not a regular income stream. On Android, the reward is Google Play credit. That distinction matters if you are looking for money you can withdraw to a bank account.",
      "sections": [
        {
          "heading": "Know what kind of reward you are earning",
          "paragraphs": [
            "Google describes Android rewards as Play credit rather than a bank transfer. Its iOS product has different availability and payment rules. Check the documentation for your platform and country instead of assuming that a screenshot from another market applies to you.",
            "For Android, Google states that survey credits expire one year after they are credited. Keep track of the balance in your own account and use the same Google account in Play and Opinion Rewards to avoid confusion."
          ]
        },
        {
          "heading": "Why surveys are not a predictable routine",
          "paragraphs": [
            "Eligibility and survey opportunities depend on the service and your profile. There is no reliable daily amount to budget for. Answer honestly and read each question; inventing answers to try to obtain more surveys can undermine the usefulness of the service.",
            "When a survey arrives, check the deadline shown in the app. Some opportunities expire in 24 hours. Keeping your profile up to date and answering carefully helps you make use of surveys that fit you."
          ]
        },
        {
          "heading": "When credit arrives and how to use it",
          "paragraphs": [
            "Google says credits can take a few days to appear. On Android, spend them on eligible Play Store purchases using the same account; each credit expires after one year."
          ],
          "source": {
            "title": "Google: redeem rewards",
            "url": "https://support.google.com/opinionrewards/answer/6322284?hl=en"
          }
        }
      ],
      "steps": [
        "Find Google Opinion Rewards in the official app store and confirm the developer is Google LLC.",
        "Check the supported countries and age requirements for your platform.",
        "Use your own Google account and review the setup questions and terms before accepting them.",
        "Wait for an eligible survey, answer honestly and check the reward type in your account.",
        "On Android, review the Play balance and expiration dates before choosing a purchase."
      ],
      "pros": [
        "A short-survey format from an identifiable provider.",
        "Can offset eligible Google Play spending on Android."
      ],
      "cons": [
        "Play credit is different from withdrawable cash.",
        "Survey availability and reward amounts are not predictable."
      ],
      "faq": [
        {
          "q": "Can I withdraw Android rewards to my bank?",
          "a": "Android rewards are credit for eligible Google Play purchases, with no bank withdrawal."
        },
        {
          "q": "How long does credit take to arrive?",
          "a": "Google says credit can take a few days to appear after a survey. Check your history in the app."
        },
        {
          "q": "Do I have to answer every survey?",
          "a": "No. Participation is optional, and the number of surveys varies."
        }
      ],
      "verdict": "Consider it if you already use Google Play credit. If you need cash for everyday expenses, do not treat this Android reward as a substitute.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "The task area brings together available surveys and options to complete your profile."
    },
    {
      "id": "microsoft",
      "app": "microsoft",
      "category": "rewards",
      "slug": "microsoft-rewards-points-guide",
      "title": "Microsoft Rewards: understand the points before chasing them",
      "description": "Learn how to earn Microsoft Rewards points, choose rewards and track redemptions in your regional catalog.",
      "intro": "Microsoft Rewards uses points that can be exchanged for eligible rewards. Before changing your browsing habits, look at the reward catalog available to your account and decide whether those rewards are useful to you. Points themselves do not have cash value.",
      "sections": [
        {
          "heading": "Start with the reward, then consider the effort",
          "paragraphs": [
            "Microsoft documents several ways to earn points, including eligible activities associated with its services. The available activities and catalogs differ by region. A screenshot from another country is not a guarantee of the same offer in your account.",
            "Check the number of points needed for an item you actually want. Then compare that with the activities you would normally do. Spending money purely to obtain points can cost more than the benefit you receive."
          ]
        },
        {
          "heading": "Redemption is an account-specific step",
          "paragraphs": [
            "Use the official Rewards dashboard to review the current redemption instructions. Microsoft advises users not to use a VPN when redeeming points. Do not automate searches, use misleading location information or share your sign-in with someone promising a shortcut.",
            "Redemption may require confirmation with a mobile or landline number; VoIP numbers are not accepted. Check that your chosen reward is still available and that you are in the same region as your account."
          ]
        },
        {
          "heading": "How to track delivery of a reward",
          "paragraphs": [
            "After redeeming, open Redeem > Order history and check the status. The confirmation email can also help you find your reward. If it does not arrive, use the resend option in your order history.",
            "Check timing in the order and the conditions for the item you chose. A gift card and account credit have different delivery methods; accumulated points are not yet a redeemed reward."
          ],
          "source": {
            "title": "Microsoft: track Rewards orders",
            "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/track-my-microsoft-rewards-orders"
          }
        }
      ],
      "steps": [
        "Open the official Microsoft Rewards page and read the information for your region.",
        "Sign in with your own Microsoft account if you choose to participate.",
        "Review available activities and the catalog before spending time earning points.",
        "Read the conditions for a specific reward, including any verification required.",
        "Redeem only when the details and account match your intention."
      ],
      "pros": [
        "An official dashboard for tracking eligible points.",
        "Rewards may fit habits you already have."
      ],
      "cons": [
        "Points are not cash and local catalogs vary.",
        "Offers, point requirements and eligibility can change."
      ],
      "faq": [
        {
          "q": "Are Microsoft Rewards points money?",
          "a": "No. Microsoft explicitly says points do not have cash value. They are used within the program for eligible rewards."
        },
        {
          "q": "Are the same rewards available everywhere?",
          "a": "No. Microsoft says offers and redemption catalogs vary by region."
        },
        {
          "q": "Where can I find my reward code?",
          "a": "Open Redeem > Order history and select the reward details. You can find the available code or link there and resend the confirmation email."
        }
      ],
      "verdict": "Review your own catalog first. The program makes more sense when useful rewards fit activities you already want to do.",
      "imageAlt": "Microsoft Rewards",
      "caption": "Microsoft Rewards brings together points and rewards linked to a Microsoft account."
    },
    {
      "id": "freecash",
      "app": "freecash",
      "category": "rewards",
      "slug": "freecash-offers-referrals-guide",
      "title": "Freecash: how it works, invitations and withdrawal times",
      "description": "Explore Freecash offers, invitations, first-withdrawal requirements and payment processing times.",
      "intro": "Freecash brings together games, surveys and other offers that can earn rewards. Each activity has its own goals and deadlines, and availability changes with your device, region and account. Before you start, understand how the offer is credited and how withdrawals work.",
      "sections": [
        {
          "heading": "How offers work",
          "paragraphs": [
            "Check the goal, deadline and required actions before starting. For a game, for example, a reward may depend on reaching a particular level. Keep the offer instructions so you can track your progress.",
            "Consider the time and any purchases involved. Choose activities that interest you and weigh the reward against the effort. If the list is empty, check again later: availability can change."
          ]
        },
        {
          "heading": "How to use the invitation",
          "paragraphs": [
            "Use the button below to open Freecash through the invitation. You can also copy 3C7GKG to save the link identifier. The terms for each promotion appear on Freecash.",
            "Invitations and promotions can depend on your country, account and qualifying activities. Check the requirements before counting a bonus toward your balance."
          ]
        },
        {
          "heading": "First withdrawal: minimum and verification",
          "paragraphs": [
            "Freecash help lists a $25 first-withdrawal threshold, varying by region, plus email and identity verification. Cashout shows your applicable amount. Check the fee before confirming."
          ],
          "source": {
            "title": "Freecash: first-withdrawal requirements",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        },
        {
          "heading": "How long does payment take?",
          "paragraphs": [
            "According to Freecash, security checks can take up to 30 minutes; bank transfers, Stash and Revolut can take 3–5 business days. Timing depends on the method and review.",
            "Track the status in My Withdrawals. An offer reward being released is an earlier step than withdrawal: first check that the amount is available to cash out."
          ],
          "source": {
            "title": "Freecash: pending withdrawals and processing times",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/why-withdrawal-pending"
          }
        }
      ],
      "steps": [
        "Open the official website or its verified app-store listing.",
        "Read account eligibility and the terms shown for your country before joining.",
        "Choose one offer and record its conditions, deadline and any spending requirements.",
        "Check the withdrawal information and verification requirements in your own account.",
        "If using a referral, verify that the program and offer apply to your region before expecting a reward."
      ],
      "pros": [
        "Offer conditions can be reviewed before deciding to start.",
        "Official help explains affiliate qualification and verification."
      ],
      "cons": [
        "Rewards depend on specific actions and eligibility.",
        "Time, spending and verification can reduce the value of an offer."
      ],
      "faq": [
        {
          "q": "What is the invitation code?",
          "a": "The invitation link identifier is 3C7GKG. Copy it or open the invitation directly with the Freecash button on this page."
        },
        {
          "q": "Does the invitation unlock a bonus immediately?",
          "a": "Promotions have their own requirements. Check the qualifying activities and conditions shown in your account."
        },
        {
          "q": "Where can I track my withdrawal?",
          "a": "In Cashout, open My Withdrawals to check the status. Contact support if it is rejected or exceeds the stated processing time."
        }
      ],
      "verdict": "Read the individual offer as carefully as the headline. Start only when the conditions, time involved and verification requirements are clear.",
      "imageAlt": "Freecash",
      "caption": "The invitation area lets you copy the link to open or share Freecash."
    },
    {
      "id": "dramastack",
      "app": "dramastack",
      "category": "rewards",
      "slug": "dramastack-pays-or-not",
      "title": "DramaStack review: do its cash rewards really pay?",
      "description": "We checked DramaStack's reward screen, withdrawal levels, Play Store listing and terms to see what its cash claims actually mean.",
      "intro": "DramaStack is primarily a short-drama streaming app, but its Benefits tab also advertises tasks, a cash balance and withdrawals. The screen looks like a way to earn money. The app's own rules describe the rewards differently, so read those terms before spending time on the tasks.",
      "sections": [
        {"heading":"A cashout screen with a high threshold","paragraphs":["On the Android version we opened, Benefits showed a zero balance, daily tasks and a separate cashout page. That page displayed withdrawal levels beginning at R$1,510 and said the official cash withdrawal starts at R$300. A congratulatory message showed another user's name and a successful R$300 withdrawal, but the screen did not provide evidence that this payment was independently verified.","The numbers and “Sacar” button are claims inside the interface. We did not complete tasks, reach the minimum, or submit a withdrawal, so we cannot confirm that a user receives money."]},
        {"heading":"What the app's own rules say","paragraphs":["The Rules panel in Benefits says daily check-in bonuses can be used to unlock episodes; when a bonus is insufficient, coins are used to complete the payment. Separately, DramaStack's privacy policy says unspent virtual coins cannot be converted into any currency. Those statements describe in-app viewing value, not cash you can freely withdraw.","The Google Play listing presents DramaStack as an ad-supported entertainment app and mentions optional ad rewards. It does not explain a cash withdrawal program or its terms. Taken together, the marketing-style cashout screen and the written rules do not establish a reliable way to earn cash."],"source":{"title":"DramaStack: privacy policy","url":"https://www.dramastack.video/privacypolicy.html"}},
        {"heading":"Does DramaStack pay?","paragraphs":["We found a cashout page with a R$300 threshold, but did not test a withdrawal. The written policy says virtual coins cannot be converted into money, and the in-app rules tie bonuses to unlocking episodes. Based on what we could verify, do not count the displayed balance or task values as income.","If you install the app for its short dramas, treat the rewards as app features with conditions. Do not spend money or invest hours based on the cashout screen alone; first look for current, written withdrawal terms that explain eligibility, method and proof of payment."],"source":{"title":"DramaStack on Google Play","url":"https://play.google.com/store/apps/details?id=com.reeltime.dramastack&hl=en"}}
      ],
      "steps":["Check that the developer in Google Play is HK Reel Time Technology Limited.","Read the Rules panel and the current user agreement and privacy policy.","Separate episode bonuses and virtual coins from money that can be withdrawn.","Before doing tasks, check whether the app provides written withdrawal eligibility and a payment method.","Do not treat an on-screen success message or balance as proof of a completed payment."],
      "pros":["Short dramas and episodes are available in the app.","The Benefits tab shows its task and bonus conditions."],
      "cons":["The app's rules describe bonuses and coins as value for unlocking episodes.","The cashout screen shows a high threshold, but we did not verify a payout."],
      "faq":[{"q":"Does DramaStack pay real money?","a":"We did not confirm a real-money payment. Its withdrawal screen shows a R$300 threshold, while its privacy policy says virtual coins cannot be converted into currency."},{"q":"Can I withdraw the coins I earn?","a":"The privacy policy says unspent virtual coins cannot be converted into any currency. The in-app rules say bonuses are used to unlock episodes."},{"q":"Did you test a withdrawal?","a":"No. The account had no balance, and we did not complete tasks, buy anything or submit a withdrawal."}],
      "verdict":"We would not recommend DramaStack as an income app. Its cashout screen makes a strong claim, but the written rules describe in-app episode rewards and the policy says virtual coins are not convertible to cash. We could not verify a payment.",
      "imageAlt":"DramaStack Benefits tab in Portuguese, with daily tasks and app rewards",
      "caption":"The Benefits tab lists daily tasks and bonuses alongside a zero balance."
    },
    {
      "id": "compare",
      "app": "compare",
      "category": "guides",
      "slug": "reward-apps-cash-points-credit",
      "title": "Cash, points or store credit? How to compare reward apps",
      "description": "Compare Google Opinion Rewards, Microsoft Rewards and Freecash by reward type, time and redemption options.",
      "intro": "Two apps can both advertise rewards and still offer very different things. Play credit, loyalty points and an offer-dependent withdrawal each have different uses. Compare the reward you can actually use before looking at the largest number on the screen.",
      "sections": [
        {
          "heading": "Three models, three different decisions",
          "paragraphs": [
            "Google Opinion Rewards on Android gives Play credit for eligible surveys. Microsoft Rewards uses points toward an account-specific catalog. Freecash has offer-based rewards and withdrawal conditions. These models should not be ranked using a single headline figure.",
            "For a fair comparison, ask what you receive, where you can use it and which steps stand between the activity and the reward. Availability depends on your platform, country and account. Check each official source rather than treating a social-media screenshot as a universal offer."
          ]
        },
        {
          "heading": "Compare the cost of your time",
          "paragraphs": [
            "Estimate the time you are willing to spend and decide whether the reward is something you would otherwise use. Include required purchases, verification and deadlines in your decision. A large offer can be poor value if it demands more spending than you planned.",
            "Try a simple calculation: if an activity takes 30 minutes, decide whether the reward is worth that time and whether you can use it. Compare the net amount, after fees or required purchases, with your other options."
          ]
        }
      ],
      "steps": [
        "Identify the reward: cash option, loyalty points or store credit.",
        "Check country, age, device and account requirements on the official source.",
        "Read withdrawal, redemption and expiration conditions.",
        "Count any spending requirement and the time needed to qualify.",
        "Choose a small, clearly understood activity and keep a record of the conditions."
      ],
      "pros": [
        "Comparing reward types prevents misleading expectations.",
        "A personal time limit makes the decision more practical."
      ],
      "cons": [
        "Catalogs and offer conditions can change.",
        "No single app is the best choice for every country or user."
      ],
      "faq": [
        {
          "q": "Which of these is guaranteed income?",
          "a": "None should be treated as guaranteed income. Availability, conditions and rewards can change."
        },
        {
          "q": "How is store credit different from cash?",
          "a": "Store credit pays for eligible purchases within that service. Withdrawable cash needs a payout method and can involve minimums, fees and verification."
        },
        {
          "q": "Where should I verify the conditions?",
          "a": "Use each provider’s official support and the current offer displayed in your own account."
        }
      ],
      "verdict": "Choose by the usefulness of the reward and the effort required. A smaller benefit you can use may be more valuable than a headline amount you cannot qualify for.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "The Google Opinion Rewards task area shows surveys and profile options."
    },
    {
      "id": "swagbucks",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "swagbucks-review-how-it-works-is-it-legit",
      "title": "Swagbucks review: how SB points work, real ways to earn and whether it is worth it",
      "description": "Learn how Swagbucks works, how much SB points are worth, and what to expect from paid surveys, mobile games, cashback shopping and PayPal redemptions.",
      "intro": "Swagbucks is one of the longest-running get-paid-to (GPT) and cashback platforms online, operated by Prodege, LLC. Instead of promising a salary, it rewards everyday digital tasks—answering market research surveys, reaching milestones in mobile games and shopping at partner retailers—with points called SB. Knowing how those points convert and which tasks actually respect your time is the key to deciding whether the platform fits your routine.",
      "sections": [
        {
          "heading": "What Swagbucks is and how much SB points are worth",
          "paragraphs": [
            "Brands, market research firms and mobile game studios pay Swagbucks to connect with consumers and test products. When you complete an eligible activity, Swagbucks shares part of that commission with you in digital points called SB. Standard redemptions value 100 SB at $1.00 USD, so a 500 SB reward corresponds to a $5 gift card or PayPal cash option where supported.",
            "On the main dashboard we captured, opportunities are grouped into clear channels: Shop and Earn for online retail cashback, Answer Surveys for consumer questionnaires, Play Games for mobile and browser titles, and Discover for partner sign-up offers. Because catalogs depend on advertiser budgets, users in the United States, Canada and the United Kingdom generally see more daily tasks than users in Latin America or smaller markets."
          ],
          "source": {
            "title": "Swagbucks: official How It Works overview",
            "url": "https://www.swagbucks.com/g/how-it-works"
          }
        },
        {
          "heading": "How to register with an invitation and set up your account",
          "paragraphs": [
            "You can create a free Swagbucks account using the official registration invitation link below. Sign up with the same email address you use for your verified PayPal account if you plan to redeem cash payouts later, and never create multiple accounts or connect through a VPN, as Prodege's security systems suspend accounts that mask their region.",
            "Right after registering, complete the initial profile questionnaire—in our capture, the 'Get Started!' prompt offered 5 SB in about 5 minutes to unlock matched survey opportunities. When you refer friends or join through an invitation, check the current terms shown on your screen; for example, the referral notice on our captured offer page required the invited user to sign up and earn at least 300 SB within 30 days."
          ],
          "cta": {
            "label": "Create your free Swagbucks account via official invitation",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Realistic earning expectations: surveys, games and cashback",
          "paragraphs": [
            "Each earning channel has a distinct trade-off. Short surveys in our capture paid between 5 SB (5 minutes) and 25 SB (20 minutes), making them easy to try without spending money, though demographic pre-screening can disqualify you if you do not match the target audience.",
            "Mobile game offers advertise higher ceilings—such as up to 919 SB on Farm Craze or up to 2,373 SB on Puzzles & Chaos: Frozen Castle—but require reaching higher levels within 30 days and following strict app-tracking rules. Treat Swagbucks as a way to earn modest extra money or gift cards during downtime rather than a predictable monthly income."
          ],
          "source": {
            "title": "Swagbucks: Rewards Store catalog",
            "url": "https://www.swagbucks.com/rewards-store"
          }
        }
      ],
      "steps": [
        "Open Swagbucks through the official registration link and sign up with your primary email address.",
        "Confirm your email and complete the 5-minute starter profile to unlock demographic-matched surveys.",
        "Browse Shop and Earn, Answer Surveys and Play Games to compare the time required per 100 SB ($1).",
        "Check the exact tracking instructions, deadline and pending period before starting any game or Discover offer.",
        "Redeem your accumulated SB in the Rewards Store for digital gift cards or a verified PayPal payout."
      ],
      "pros": [
        "Transparent 100 SB = $1.00 USD baseline value across gift cards and PayPal redemptions.",
        "Combines paid surveys, mobile game milestones and retail cashback in a single dashboard."
      ],
      "cons": [
        "Survey disqualifications and regional catalog differences limit how much you can earn per hour.",
        "High-paying game and Discover rewards typically pend for several days before you can cash out."
      ],
      "faq": [
        {
          "q": "Is Swagbucks legit and free to join?",
          "a": "Yes. Swagbucks is operated by Prodege, LLC and is free to join. You do not need to pay a membership fee, though some optional Discover or game milestones involve purchases."
        },
        {
          "q": "How much are 1,000 SB worth in dollars?",
          "a": "At the standard conversion rate of 100 SB per $1.00 USD, 1,000 SB are worth $10.00 toward eligible gift cards or PayPal cash in the Rewards Store."
        },
        {
          "q": "Can I use a VPN to get more Swagbucks offers?",
          "a": "No. Using a VPN, proxy or false location violates Prodege's terms of use and typically results in account deactivation during withdrawal review."
        }
      ],
      "verdict": "Swagbucks is a legitimate, well-established option for earning gift cards and extra PayPal cash if you combine cashback on purchases you already make with selective game milestones and short surveys.",
      "imageAlt": "Swagbucks Shop and Earn cashback rates and Answer Surveys dashboard",
      "caption": "The Swagbucks dashboard pairs retail cashback offers (such as Walmart, eBay and Best Buy) with timed surveys.",
      "imageKey": "swagbucks-shop",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-games",
        "alt": "Swagbucks Play Games and Earn catalog for Android showing SB rewards per game",
        "caption": "The Play Games and Earn section lists Android titles with milestone rewards ranging from 26 SB to 2,373 SB.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-games",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "swagbucks-games-guide-milestones-tracking",
      "title": "Swagbucks games that pay: how mobile milestones, QR installs and app tracking work",
      "description": "See how Play Games and Earn works on Swagbucks, using real Android offers like Farm Craze (919 SB) and Puzzles & Chaos (2,373 SB) to explain tracking and 30-day goals.",
      "intro": "Mobile game offers are among the highest-paying activities on Swagbucks because you do not face mid-task survey disqualifications. However, the headline number on a game card is a cumulative total split across tiered milestones—and earning a single point depends on uninterrupted app tracking from the moment you scan the install code.",
      "sections": [
        {
          "heading": "Reading the Play Games catalog: headline totals vs. tiered goals",
          "paragraphs": [
            "On the Android catalog we captured, Swagbucks displayed titles across casual, puzzle and strategy genres: Puzzles & Chaos: Frozen Castle (up to 2,373 SB), Screw Out (up to 1,233 SB), Merge Restaurant (up to 1,100 SB), Farm Craze (up to 919 SB), Box Away (up to 618 SB), Viking Rise (up to 596 SB) and Wood Block Jam (up to 560 SB).",
            "The phrase 'Earn up to' is crucial. You do not receive the full amount simply for installing the app. When we opened the Farm Craze offer details (up to 919 SB on Android), the Goal Progress bar broke the reward into sequential steps: installing the game, an optional 'Make any purchase' goal (+52 SB), reaching Level 30 (+1 SB), reaching Level 40 (+4 SB), and progressively higher tiers culminating at Level 2000 within 30 days."
          ],
          "source": {
            "title": "Swagbucks: Play Games channel",
            "url": "https://www.swagbucks.com/games"
          }
        },
        {
          "heading": "How to install games via QR code or link without breaking tracking",
          "paragraphs": [
            "When you open a mobile game offer on a computer, Swagbucks provides a QR code ('Scan to Install') alongside options to send the installation link via text message or email to your phone. Always initiate the download directly through that official Swagbucks link on the target Android or iOS device—and only if you have never installed that game on your device or app-store account before.",
            "You can register or sign in through the official Swagbucks invitation link below to inspect current game milestones for your device. Before playing for hours, disable VPNs, ad blockers and private relay features, accept app-tracking permissions when prompted, and verify in your Swagbucks Activity Ledger ('Visited' tab) that your click registered."
          ],
          "cta": {
            "label": "Open Swagbucks via invitation to explore mobile game offers",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "30-day deadlines, in-app purchases and 5-day pending windows",
          "paragraphs": [
            "In our Farm Craze capture, the 'Important Things to Know' panel stated three rules that apply to most mobile offers: reach the top level within 30 days of installation for maximum rewards, follow the app-tracking steps, and note that 'Award will pend for 5 days.' That means even after you reach a milestone, the SB points remain in a pending state for 5 days before joining your redeemable balance.",
            "Check your Goal Progress after the very first milestone (such as Level 30). If the first level does not track as pending, stop grinding and review the support instructions—continuing to play an untracked installation rarely unlocks later tiers. Also calculate whether optional purchase milestones (like +52 SB, or $0.52, for making a purchase) cost more than the points they return."
          ],
          "source": {
            "title": "Prodege: terms of use and offer eligibility",
            "url": "https://www.prodege.com/terms-of-use/"
          }
        }
      ],
      "steps": [
        "Filter the Play Games section by your phone's operating system (Android or iOS) to see compatible offers.",
        "Open the game's detail panel and read every milestone under Goal Progress along with the day limit.",
        "Scan the Swagbucks QR code or open the SMS/email link on a device that has never installed the game before.",
        "Allow app tracking when launching the game for the first time and keep ad blockers and VPNs turned off.",
        "Confirm that the initial install and first low-level milestone appear in your Goal Progress before committing hours to higher levels."
      ],
      "pros": [
        "Clear milestone progress bars show the exact SB reward and day limit for each level.",
        "Higher earning potential than short surveys when you enjoy puzzle or strategy games."
      ],
      "cons": [
        "Top-tier goals (such as reaching Level 2000 in 30 days) require substantial daily screen time.",
        "Tracking fails permanently if you previously installed the app or block device attribution."
      ],
      "faq": [
        {
          "q": "Why did my Swagbucks game milestone not go to pending?",
          "a": "Tracking usually fails if you installed the game previously, used a VPN or ad blocker, denied tracking permissions, or switched devices after clicking the offer link."
        },
        {
          "q": "Do I have to reach the final level to earn anything?",
          "a": "No. Multi-goal offers like Farm Craze credit each completed tier individually (for example, Level 30 and Level 40), even if you stop before the final level."
        },
        {
          "q": "What does 'Award will pend for 5 days' mean?",
          "a": "Once Swagbucks records a completed game goal, the SB points sit in your Pending ledger for 5 days while the advertiser verifies the activity before you can redeem them."
        }
      ],
      "verdict": "Swagbucks mobile games are worth playing when you focus on realistic mid-tier milestones and confirm that tracking works on the very first level. Skip offers where the top tier requires spending more on in-app purchases than the SB reward is worth.",
      "imageAlt": "Swagbucks Play Games and Earn Android catalog showing Screw Out, Farm Craze and Puzzles & Chaos",
      "caption": "The Android game catalog displays maximum SB totals across casual, puzzle and strategy titles.",
      "imageKey": "swagbucks-games",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-offer",
        "alt": "Swagbucks Farm Craze offer details showing 919 SB total, QR code install and 30-day Goal Progress milestones",
        "caption": "Inside the Farm Craze offer: QR installation, a 30-day window to reach Level 2000, a 5-day pending notice and individual level payouts.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-surveys",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "swagbucks-surveys-and-cashback-shopping-guide",
      "title": "Swagbucks paid surveys and cashback shopping: how to earn SB without overspending",
      "description": "A practical guide to Swagbucks Answer Surveys and Shop and Earn cashback at stores like Walmart, eBay and Home Depot, including why survey disqualifications happen.",
      "intro": "Not everyone wants to grind mobile game levels for 30 days. For users who prefer quick browser tasks or want to earn rebates on online shopping they already plan to do, Swagbucks offers two core channels: Answer Surveys and Shop and Earn cashback. Combining both carefully helps you accumulate SB without spending extra money.",
      "sections": [
        {
          "heading": "How Answer Surveys work and why disqualifications happen",
          "paragraphs": [
            "On the Swagbucks dashboard we captured, the Answer Surveys and Earn row listed each questionnaire with its estimated duration and payout: 5 SB for 5 minutes (Survey #201976545), 10 SB for 5 minutes, and 25 SB for 20 minutes, alongside a 'Get Started! Earn 5 SB in about 5 minutes' profile card.",
            "Every market research survey targets a specific consumer group—such as homeowners, parents or users of a certain software brand. When you open a survey, the first few questions act as a demographic filter. If your profile does not match the quota, the survey closes early. Always answer truthfully and consistently; rushing through questions or giving contradictory answers across surveys can get you blocked from the Answer channel."
          ],
          "source": {
            "title": "Swagbucks: paid online surveys overview",
            "url": "https://www.swagbucks.com/g/paid-surveys"
          }
        },
        {
          "heading": "Shop and Earn: turning routine online purchases into SB",
          "paragraphs": [
            "The Shop and Earn section functions as a cashback portal where partner retailers pay Swagbucks a referral commission and you receive a percentage back in SB per dollar spent. In our captured screen, featured rates included Walmart (up to 8% cash back, or 8 SB per $1), eBay (up to 5% cash back), Best Buy (up to 6% cash back), Kohl's (4% cash back), Expedia (up to 12% cash back), Hotels.com (up to 12% cash back), and QVC, HSN and The Home Depot (up to 15% cash back, or 15 SB per $1).",
            "You can sign up via the official Swagbucks registration link below to check the current cashback percentages and survey list for your region. To make sure a store purchase tracks properly, start with an empty shopping cart, click through from Swagbucks Shop, and avoid activating competing coupon or cashback browser extensions during checkout."
          ],
          "cta": {
            "label": "Join Swagbucks free to access surveys and cashback deals",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Golden rules to protect your time and budget",
          "paragraphs": [
            "For surveys, look at the ratio between SB and minutes. A 5-minute survey paying 10 SB offers a better return per minute than a 20-minute survey paying 25 SB, and shorter surveys reduce frustration if you get screened out.",
            "For Shop and Earn, treat cashback strictly as a rebate on items you already budgeted for. Buying something at 15% cashback just to collect 15 SB per dollar still leaves you spending 85% of the price—so compare the store's final price before clicking buy."
          ],
          "source": {
            "title": "Swagbucks: Shop and Earn cashback directory",
            "url": "https://www.swagbucks.com/shop"
          }
        }
      ],
      "steps": [
        "Create your free Swagbucks account and complete the 5-minute starter profile under Answer Surveys.",
        "Sort available surveys by duration and start with short 5-to-10-minute questionnaires.",
        "Before shopping online at retailers like Walmart, eBay or Expedia, search the store inside Swagbucks Shop and Earn.",
        "Read the store's category exclusions and disable third-party coupon extensions before clicking through to the retailer.",
        "Verify that your shopping visit or completed survey appears in your Swagbucks Activity Ledger."
      ],
      "pros": [
        "Surveys require zero spending and clearly display estimated minutes and SB before you click.",
        "Cashback shopping rewards up to 1%–15% (1–15 SB per $1) at major everyday retailers."
      ],
      "cons": [
        "Demographic screening frequently disqualifies users partway through survey questionnaires.",
        "Cashback SB usually remain pending until the retailer's return window closes."
      ],
      "faq": [
        {
          "q": "Why do I keep getting disqualified from Swagbucks surveys?",
          "a": "Research providers close surveys when a demographic quota fills up or when your answers do not match the specific buyer profile they are studying."
        },
        {
          "q": "How does 'Earn up to 15 SB per $1' work in Shop and Earn?",
          "a": "Each 1% of cashback equals 1 SB per $1 spent on eligible pre-tax, pre-shipping items. Rates vary by product category within each store."
        },
        {
          "q": "Can I combine Swagbucks cashback with other coupon extensions?",
          "a": "No. Activating another browser extension at checkout usually overwrites Swagbucks's affiliate cookie and cancels your SB cashback."
        }
      ],
      "verdict": "Use Answer Surveys for quick, zero-cost points during short breaks, and activate Shop and Earn only when buying from retailers you already planned to use.",
      "imageAlt": "Swagbucks Shop and Earn retail cashback cards and Answer Surveys list",
      "caption": "Shop and Earn displays cashback rates in percentages and SB per dollar alongside timed survey opportunities.",
      "imageKey": "swagbucks-shop",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-goals",
        "alt": "Swagbucks offer rules and referral terms panel",
        "caption": "Offer panels specify tracking rules, pending days and referral conditions (such as earning 300 SB within 30 days).",
        "wide": true
      }
    },
    {
      "id": "swagbucks-cashout",
      "app": "swagbucks",
      "category": "guides",
      "slug": "how-to-cash-out-swagbucks-paypal-gift-cards",
      "title": "How to cash out on Swagbucks: PayPal requirements, pending SB days and gift cards",
      "description": "Understand why Swagbucks rewards pend for days before release, how to convert SB into PayPal cash or gift cards, and which verification rules apply.",
      "intro": "Earning SB points is only half of the process on Swagbucks; turning those points into PayPal money or a usable gift card requires passing two stages: waiting for pending activity to clear and meeting account verification rules in the Rewards Store. Knowing how both steps work prevents delays when you request your first payout.",
      "sections": [
        {
          "heading": "Pending SB vs. redeemable balance: why points wait",
          "paragraphs": [
            "When you complete a mobile game milestone, a Discover sign-up or a cashback purchase, the points rarely become withdrawable immediately. In the Farm Craze offer we captured, the rules explicitly state: 'Award will pend for 5 days.' During that pending window, the points appear in your Activity Ledger with a countdown date while the advertiser confirms the transaction.",
            "You can only redeem SB that have finished their pending period and moved into your available account balance. Short surveys often credit immediately upon completion, whereas game tiers, financial offers like Coinbase, and retail cashback have fixed pending periods ranging from 5 to 32+ days depending on the merchant."
          ],
          "source": {
            "title": "Swagbucks: Rewards Store redemption options",
            "url": "https://www.swagbucks.com/rewards-store"
          }
        },
        {
          "heading": "PayPal cash vs. digital gift cards: matching your account details",
          "paragraphs": [
            "In the Swagbucks Rewards Store, 100 SB generally equal $1.00 USD. Digital gift cards (such as Amazon, Walmart or Target in supported regions) often have lower starting thresholds—sometimes 300 to 500 SB ($3 to $5)—and occasionally feature a monthly discount on your first card of a specific denomination.",
            "If you prefer cash via PayPal, your Swagbucks account email address must match the email on your verified PayPal account, and your legal name should match across both services. Register through the official Swagbucks link below using the exact email tied to your PayPal account so you do not run into a mismatch at cashout."
          ],
          "cta": {
            "label": "Register on Swagbucks with your verified email address",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "First-withdrawal verification and delivery times",
          "paragraphs": [
            "When you submit a redemption order, Swagbucks requires confirmation—typically via an SMS verification code sent to a real mobile phone number (VoIP numbers are not accepted) or by answering your security question. First-time redemptions or high-value orders may also trigger a one-time government ID check.",
            "After you verify the order, reward delivery is not instant. Digital gift cards and PayPal transfers typically take 2 to 5 business days (and occasionally up to 10 business days) to process. You can track the status of every order inside the My Rewards section of your account."
          ],
          "source": {
            "title": "Prodege: terms of use and reward redemption policies",
            "url": "https://www.prodege.com/terms-of-use/"
          }
        }
      ],
      "steps": [
        "Open your Activity Ledger to check when any Pending SB will finish their holding period and join your total balance.",
        "Confirm that your Swagbucks login email and first/last name match your verified PayPal account before requesting cash.",
        "Open the Rewards Store and choose a digital gift card or PayPal denomination that matches your available SB.",
        "Complete the SMS phone verification or security prompt to confirm the redemption order.",
        "Monitor the order status in My Rewards and allow 2 to 5 business days for delivery."
      ],
      "pros": [
        "Choice between direct PayPal cash and major retail gift cards in supported regions.",
        "Activity Ledger clearly shows pending durations (such as 5 days on mobile game milestones)."
      ],
      "cons": [
        "Points in Pending status cannot be withdrawn until the countdown finishes.",
        "Redemptions require matching PayPal emails, a non-VoIP phone number and 2–5 business days of processing."
      ],
      "faq": [
        {
          "q": "Why can I not cash out my Pending SB right away?",
          "a": "Pending SB are held for a set window—such as 5 days for the Farm Craze game offer—so the partner can verify valid completion before releasing the funds."
        },
        {
          "q": "Does my PayPal email have to match my Swagbucks email?",
          "a": "Yes. Swagbucks requires your account email and name to match a verified PayPal account in order to process PayPal cash redemptions."
        },
        {
          "q": "How long does a Swagbucks PayPal payout take to arrive?",
          "a": "Once verified, most PayPal redemptions and digital gift cards are delivered within 2 to 5 business days, though up to 10 business days can apply."
        }
      ],
      "verdict": "Set up your account with your verified PayPal email from day one and keep a real mobile number ready for SMS confirmation so your first cashout goes smoothly once Pending SB clear.",
      "imageAlt": "Swagbucks Farm Craze offer panel showing Award will pend for 5 days and Goal Progress",
      "caption": "Offer terms state the exact pending duration—here, 'Award will pend for 5 days'—above the Goal Progress tracker.",
      "imageKey": "swagbucks-goals",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-offer",
        "alt": "Full Swagbucks game offer window with QR install and milestone rules",
        "caption": "Checking the full offer window before you start tells you the pending window, device requirement and 30-day completion limit.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-vs-freecash",
      "app": "swagbucks",
      "category": "guides",
      "slug": "swagbucks-vs-freecash-reward-sites-comparison",
      "title": "Swagbucks vs. Freecash: which get-paid-to site is better for extra income?",
      "description": "Compare Swagbucks and Freecash across mobile game payouts, paid surveys, online shopping cashback, pending periods and withdrawal rules.",
      "intro": "Swagbucks and Freecash are two of the most searched get-paid-to (GPT) platforms for earning extra money online. Both pay users to test mobile games, complete partner offers and answer surveys, yet they differ significantly in how they handle online shopping cashback, first-withdrawal thresholds and regional offer catalogs.",
      "sections": [
        {
          "heading": "Where Swagbucks stands out: cashback shopping plus games and surveys",
          "paragraphs": [
            "Freecash focuses heavily on mobile game milestones, partner offerwalls and surveys. Swagbucks covers those same categories—our Android capture showed game offers like Puzzles & Chaos (up to 2,373 SB) and Screw Out (up to 1,233 SB) plus Coinbase in Discover—while adding a major built-in Shop and Earn cashback portal with retailers like Walmart (up to 8%), eBay (up to 5%) and The Home Depot (up to 15%).",
            "If you already shop online or want low-barrier starter tasks like 5-minute surveys (5 to 10 SB), Swagbucks provides more ways to accumulate points when your mobile game list is quiet."
          ],
          "source": {
            "title": "Swagbucks: How It Works and earning channels",
            "url": "https://www.swagbucks.com/g/how-it-works"
          }
        },
        {
          "heading": "Comparing game milestones, tracking and account invitations",
          "paragraphs": [
            "On both platforms, high-paying mobile games split their headline payout into sequential levels with a 30-day window and a pending period (such as the 5-day pending rule shown on Swagbucks's Farm Craze offer). Because you can only complete a new-user game install once per device and app-store account, many experienced users keep accounts on both sites and compare which platform pays more for a specific game title before installing it.",
            "You can open your Swagbucks account through the official invitation link below and compare its live game catalog against Freecash before choosing your next offer."
          ],
          "cta": {
            "label": "Open Swagbucks via official invitation to compare live offers",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Withdrawal thresholds, verification and payout methods",
          "paragraphs": [
            "As documented in our Freecash guide, Freecash help specifies a $25 first-withdrawal threshold (varying by region) along with email and identity verification, while offering crypto, bank transfer and gift card payouts. Swagbucks values 100 SB at $1.00 USD and lets users redeem digital gift cards and PayPal cash at lower starting denominations in many markets, provided your PayPal email matches your Swagbucks login and you confirm your order via SMS.",
            "Neither platform replaces a regular job, and both enforce strict anti-VPN and single-account rules. Check the live catalog in your country on both services before investing hours in a long game grind."
          ],
          "source": {
            "title": "Freecash: first-withdrawal requirements",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        }
      ],
      "steps": [
        "Create accounts on Swagbucks and Freecash using your real location and primary email address.",
        "Before installing a mobile game, search the title on both platforms to compare total payout, level milestones and pending days.",
        "Use Swagbucks Shop and Earn when making planned purchases at supported online retailers.",
        "Install each chosen game only through the platform you selected, keeping app tracking enabled.",
        "Track pending dates and first-cashout minimums in each dashboard so you know when your balance can be withdrawn."
      ],
      "pros": [
        "Swagbucks adds 1%–15% retail cashback and low-threshold gift cards alongside games and surveys.",
        "Comparing both catalogs lets you pick the better milestone structure for each new mobile game."
      ],
      "cons": [
        "You cannot claim the same new-user mobile game offer on both platforms with the same device.",
        "Offer availability and payout options vary significantly by country on both sites."
      ],
      "faq": [
        {
          "q": "Can I use both Swagbucks and Freecash at the same time?",
          "a": "Yes, you can hold an account on each site, but you can only complete a given new-user app or game offer on one platform per device and app-store account."
        },
        {
          "q": "Which site is better for online shopping cashback?",
          "a": "Swagbucks has a dedicated Shop and Earn portal partnering with major stores like Walmart, eBay, Best Buy and Expedia, whereas Freecash focuses on games and offerwalls."
        },
        {
          "q": "How do their point values compare?",
          "a": "Swagbucks uses SB where 100 SB = $1.00 USD. Freecash uses coins where 1,000 coins = $1.00 USD. Always compare the dollar equivalent and the level requirements."
        }
      ],
      "verdict": "Choose Swagbucks if you want an all-in-one rewards site that combines retail cashback, surveys and PayPal/gift card redemptions. Keep both accounts handy if you play mobile games and want to compare milestone terms before installing a new title.",
      "imageAlt": "Swagbucks Play Games and Discover offers on Android",
      "caption": "Swagbucks lists Android game milestones alongside Discover offers like Coinbase.",
      "imageKey": "swagbucks-games",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-shop",
        "alt": "Swagbucks Shop and Earn cashback portal and Answer Surveys",
        "caption": "Unlike pure offerwall sites, Swagbucks includes a retail cashback portal paying up to 15 SB per $1 at partner stores.",
        "wide": true
      }
    }
  ],
  "es": [
    {
      "id": "lens",
      "app": "lens",
      "category": "tools",
      "slug": "como-usar-google-lens",
      "title": "Google Lens: busca lo que ves, sin adivinar las palabras",
      "description": "Busca por imagen, copia texto y traduce con Google Lens. Aprende a usarlo en el móvil y a interpretar los resultados.",
      "intro": "Google Lens permite iniciar una búsqueda a partir de una imagen. Puede ayudarte a explorar un objeto que no sabes nombrar, copiar un texto o entender un cartel. La clave es revisar la fuente detrás de cada resultado y reconocer los límites de una coincidencia visual.",
      "sections": [
        {
          "heading": "Qué puedes hacer con una imagen",
          "paragraphs": [
            "Lens permite buscar objetos similares, reconocer texto y traducirlo. Google documenta su acceso desde la app de Google en dispositivos compatibles con Android y iOS. También puedes partir de una foto o una captura guardada; los controles dependen del dispositivo.",
            "Una coincidencia visual sirve como pista. Compara detalles y abre la página original antes de confiar en una identificación. El encuadre, la iluminación y los objetos parecidos pueden confundir el resultado."
          ]
        },
        {
          "heading": "Copiar y traducir con cuidado",
          "paragraphs": [
            "Selecciona un texto nítido y revisa números, nombres y saltos de línea antes de pegarlo. Una traducción necesita contexto; si el resultado afecta una decisión importante, compruébalo por otra vía.",
            "Para aprender, usa una imagen sin información privada. Consulta la ayuda de Google sobre el historial de búsquedas visuales para entender cómo pueden guardarse las imágenes."
          ]
        }
      ],
      "steps": [
        "Abre la app de Google y busca el icono de cámara de Lens.",
        "Elige una imagen o enfoca un objeto, concediendo solo el acceso necesario.",
        "Ajusta la selección para destacar el objeto o el texto relevante.",
        "Consulta la fuente del resultado o revisa el texto antes de copiarlo o traducirlo."
      ],
      "pros": [
        "Permite buscar sin conocer el nombre de un objeto.",
        "Combina búsqueda visual y herramientas de texto."
      ],
      "cons": [
        "Las coincidencias pueden ser incorrectas.",
        "Los controles y funciones varían entre dispositivos."
      ],
      "faq": [
        {
          "q": "¿Tengo que pagar para usar Google Lens?",
          "a": "Google Lens es gratuito. Puedes acceder desde la app de Google en los dispositivos compatibles."
        },
        {
          "q": "¿Puedo usar una foto guardada?",
          "a": "Sí. Google documenta el uso de fotos y capturas existentes en las interfaces compatibles."
        },
        {
          "q": "¿Siempre acierta?",
          "a": "No. Verifica la página original y el contexto antes de confiar en una respuesta."
        }
      ],
      "verdict": "Un atajo útil para buscar y manejar texto. Empieza con una imagen sencilla y comprueba la fuente detrás de la respuesta.",
      "imageAlt": "Google Lens",
      "caption": "Google Lens permite empezar una búsqueda a partir de una imagen."
    },
    {
      "id": "opinion",
      "app": "opinion",
      "category": "rewards",
      "slug": "google-opinion-rewards-como-funciona",
      "title": "Google Opinion Rewards: encuestas, créditos y expectativas reales",
      "description": "Entiende las recompensas de Google Opinion Rewards en Android, la disponibilidad de encuestas y las diferencias entre saldo de Play y dinero.",
      "intro": "Google Opinion Rewards ofrece recompensas por encuestas elegibles. En Android se reciben créditos de Google Play. Entender esa diferencia es fundamental si buscas dinero que puedas retirar a una cuenta bancaria.",
      "sections": [
        {
          "heading": "Primero identifica la recompensa",
          "paragraphs": [
            "La documentación de Google describe crédito de Play para Android. La versión para iOS tiene reglas y disponibilidad distintas. Consulta la información de tu plataforma y país antes de aplicar una experiencia publicada desde otro mercado.",
            "Google indica que los créditos de las encuestas de Android caducan un año después de recibirlos. Usa la misma cuenta de Google en Play y Opinion Rewards para evitar confusiones sobre el saldo."
          ]
        },
        {
          "heading": "Las encuestas no son un ingreso fijo",
          "paragraphs": [
            "La elegibilidad y las oportunidades dependen del servicio y del perfil. No hay una cantidad diaria fiable para organizar un presupuesto. Lee las preguntas y responde honestamente en lugar de inventar datos para intentar recibir más encuestas.",
            "Cuando llegue una encuesta, revisa el plazo que muestra la app. Algunas oportunidades caducan en 24 horas. Mantener el perfil actualizado y responder con atención te ayuda a aprovechar las encuestas adecuadas para ti."
          ]
        },
        {
          "heading": "Cuándo llega el saldo y dónde usarlo",
          "paragraphs": [
            "Google indica que el crédito puede tardar unos días en aparecer. En Android, úsalo en compras elegibles de Play Store con la misma cuenta; cada abono caduca al año."
          ],
          "source": {
            "title": "Google: canjear recompensas",
            "url": "https://support.google.com/opinionrewards/answer/6322284?hl=es"
          }
        }
      ],
      "steps": [
        "Busca la app oficial y comprueba que el desarrollador sea Google LLC.",
        "Revisa los países disponibles y el requisito de edad de tu plataforma.",
        "Accede con tu cuenta y lee las preguntas y condiciones antes de aceptarlas.",
        "Espera una encuesta elegible y revisa el tipo de recompensa.",
        "En Android, comprueba el saldo de Play y su caducidad antes de utilizarlo."
      ],
      "pros": [
        "Formato de encuestas cortas de un proveedor identificado.",
        "Puede ayudar con compras elegibles de Google Play."
      ],
      "cons": [
        "El crédito de Play es distinto del dinero retirable.",
        "La cantidad y frecuencia de encuestas no son previsibles."
      ],
      "faq": [
        {
          "q": "¿Puedo retirar el saldo de Android a mi banco?",
          "a": "En Android, las recompensas son saldo para compras elegibles en Google Play, sin retiro bancario."
        },
        {
          "q": "¿Cuánto tarda en llegar el saldo?",
          "a": "Según Google, el crédito puede tardar unos días en aparecer después de la encuesta. Revisa el historial de la app."
        },
        {
          "q": "¿Tengo que responder todas las encuestas?",
          "a": "No. Participar es opcional y la cantidad de encuestas varía."
        }
      ],
      "verdict": "Puede tener sentido si ya utilizas crédito de Google Play. No lo consideres un sustituto de dinero para gastos cotidianos.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "El área de tareas reúne encuestas disponibles y opciones para completar el perfil."
    },
    {
      "id": "microsoft",
      "app": "microsoft",
      "category": "rewards",
      "slug": "guia-puntos-microsoft-rewards",
      "title": "Microsoft Rewards: entiende los puntos antes de acumularlos",
      "description": "Aprende a ganar puntos en Microsoft Rewards, elegir recompensas y seguir el canje en el catálogo de tu región.",
      "intro": "Microsoft Rewards utiliza puntos para acceder a recompensas elegibles. Antes de cambiar tus hábitos, revisa el catálogo de tu cuenta y decide si sus opciones te resultan útiles. Los puntos no tienen valor en efectivo.",
      "sections": [
        {
          "heading": "Empieza por el catálogo",
          "paragraphs": [
            "Microsoft explica distintas formas de obtener puntos mediante actividades elegibles en sus servicios. Las actividades y los catálogos varían por región. Una oferta de otro país no garantiza las mismas condiciones en tu cuenta.",
            "Busca una recompensa que realmente quieras y revisa cuántos puntos exige. Después considera las actividades que ya realizarías. Comprar solo para sumar puntos puede costar más que el beneficio obtenido."
          ]
        },
        {
          "heading": "Revisa las reglas antes del canje",
          "paragraphs": [
            "Consulta las instrucciones vigentes en el panel oficial. Microsoft recomienda no utilizar una VPN al canjear. Evita automatizaciones y datos de ubicación engañosos; tampoco compartas tu acceso con quien prometa atajos.",
            "El canje puede pedir la confirmación de un teléfono móvil o fijo; no se aceptan números VoIP. Comprueba también que la recompensa siga disponible y que estés en la misma región de tu cuenta."
          ]
        },
        {
          "heading": "Cómo seguir la entrega de tu recompensa",
          "paragraphs": [
            "Después del canje, abre Canjear > Historial de pedidos y consulta el estado. El correo de confirmación también ayuda a encontrar la recompensa. Si no llega, utiliza la opción de reenvío del historial.",
            "Consulta el plazo en el pedido y las condiciones de la recompensa elegida. Una tarjeta regalo y el saldo de cuenta tienen formas de entrega distintas; acumular puntos todavía no completa un canje."
          ],
          "source": {
            "title": "Microsoft: seguir pedidos de Rewards",
            "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/track-my-microsoft-rewards-orders"
          }
        }
      ],
      "steps": [
        "Abre Microsoft Rewards y consulta la información de tu región.",
        "Si decides participar, accede con tu propia cuenta de Microsoft.",
        "Revisa actividades y catálogo antes de dedicar tiempo a los puntos.",
        "Lee las condiciones de la recompensa y la verificación requerida.",
        "Realiza el canje solo si los datos y la cuenta son correctos."
      ],
      "pros": [
        "Panel oficial para consultar los puntos elegibles.",
        "Puede encajar con actividades que ya realizas."
      ],
      "cons": [
        "Los puntos no son dinero y los catálogos varían.",
        "Las ofertas y los requisitos pueden cambiar."
      ],
      "faq": [
        {
          "q": "¿Los puntos son dinero?",
          "a": "No. Microsoft indica que no tienen valor en efectivo; se usan dentro del programa."
        },
        {
          "q": "¿Hay las mismas recompensas en todos los países?",
          "a": "No. Las ofertas y los catálogos dependen de la región."
        },
        {
          "q": "¿Dónde encuentro el código de una recompensa?",
          "a": "Abre Canjear > Historial de pedidos y selecciona los detalles de la recompensa. Ahí encontrarás el código o enlace disponible y podrás reenviar la confirmación por correo."
        }
      ],
      "verdict": "Consulta primero tu catálogo. El programa tiene más sentido si ofrece algo útil por actividades que ya quieres hacer.",
      "imageAlt": "Microsoft Rewards",
      "caption": "Microsoft Rewards reúne puntos y recompensas vinculados a la cuenta Microsoft."
    },
    {
      "id": "freecash",
      "app": "freecash",
      "category": "rewards",
      "slug": "freecash-ofertas-invitaciones",
      "title": "Freecash: cómo funciona, invitaciones y plazos de retiro",
      "description": "Conoce Freecash: ofertas, invitaciones, requisitos del primer retiro y plazos de pago.",
      "intro": "Freecash reúne juegos, encuestas y otras ofertas que pueden generar recompensas. Cada actividad tiene objetivos y plazos propios, y las opciones cambian según el dispositivo, la región y la cuenta. Antes de empezar, conviene entender cómo se valida la oferta y cómo se retira el saldo.",
      "sections": [
        {
          "heading": "Cómo funcionan las ofertas",
          "paragraphs": [
            "Revisa el objetivo, el plazo y las acciones requeridas antes de empezar. En un juego, por ejemplo, la recompensa puede depender de alcanzar un nivel concreto. Guarda las instrucciones para seguir tu progreso.",
            "Ten en cuenta el tiempo y cualquier compra necesaria. Elige actividades que te interesen y compara la recompensa con el esfuerzo. Si la lista está vacía, revisa más tarde: la disponibilidad puede cambiar."
          ]
        },
        {
          "heading": "Cómo acceder con la invitación",
          "paragraphs": [
            "Usa el botón de abajo para abrir Freecash con la invitación. También puedes copiar 3C7GKG para guardar el identificador del enlace. Las condiciones de cada promoción aparecen en Freecash.",
            "Las invitaciones y promociones pueden depender del país, la cuenta y las actividades elegibles. Revisa los requisitos antes de contar con un bono en tu saldo."
          ]
        },
        {
          "heading": "Primer retiro: mínimo y verificación",
          "paragraphs": [
            "La ayuda de Freecash indica un mínimo inicial de 25 USD, variable por región, y verificación de correo e identidad. Cashout muestra el importe aplicable. Revisa la comisión antes de confirmar."
          ],
          "source": {
            "title": "Freecash: requisitos del primer retiro",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        },
        {
          "heading": "¿Cuánto tarda el pago?",
          "paragraphs": [
            "Según Freecash, las verificaciones de seguridad pueden durar hasta 30 minutos; transferencias bancarias, Stash y Revolut pueden tardar de 3 a 5 días laborables. El plazo depende del método y la revisión.",
            "Consulta el estado en My Withdrawals. La liberación de la recompensa de una oferta ocurre antes del retiro: comprueba primero que el importe esté disponible."
          ],
          "source": {
            "title": "Freecash: plazos y retiros pendientes",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/why-withdrawal-pending"
          }
        }
      ],
      "steps": [
        "Abre el sitio oficial o su ficha verificada en la tienda.",
        "Lee los requisitos de la cuenta y las condiciones de tu país.",
        "Elige una oferta y registra las acciones, el plazo y los gastos requeridos.",
        "Consulta la información de retiro y verificación en tu cuenta.",
        "Si usas una invitación, comprueba que el programa se aplique a tu región."
      ],
      "pros": [
        "Puedes revisar una oferta antes de decidir participar.",
        "La ayuda oficial explica los requisitos de las invitaciones."
      ],
      "cons": [
        "La recompensa depende de acciones y elegibilidad.",
        "Tiempo, gastos y verificación afectan el valor de la oferta."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código de invitación?",
          "a": "El identificador del enlace es 3C7GKG. Puedes copiarlo o acceder directamente con el botón de Freecash de esta página."
        },
        {
          "q": "¿La invitación activa un bono inmediato?",
          "a": "Las promociones tienen requisitos propios. Revisa las actividades elegibles y las condiciones de tu cuenta."
        },
        {
          "q": "¿Dónde sigo mi retiro?",
          "a": "En Cashout, abre My Withdrawals para consultar el estado. Si se rechaza o supera el plazo indicado, contacta con soporte."
        }
      ],
      "verdict": "Lee cada oferta con atención. Empieza solo cuando entiendas las condiciones, el tiempo necesario y la verificación.",
      "imageAlt": "Freecash",
      "caption": "El área de invitaciones permite copiar el enlace para acceder o compartir Freecash."
    },
    {
      "id": "dramastack",
      "app": "dramastack",
      "category": "rewards",
      "slug": "dramastack-paga-o-no",
      "title": "DramaStack: ¿paga de verdad? Recompensas y retiro",
      "description": "Revisamos las tareas, los niveles de retiro, la ficha de Google Play y las condiciones de DramaStack.",
      "intro": "DramaStack es una app para ver dramas cortos, pero la pestaña Beneficios también muestra tareas, saldo y retiros. La pantalla parece ofrecer dinero. Sin embargo, las reglas de la propia aplicación describen las recompensas de otra forma; conviene leerlas antes de dedicar tiempo a las tareas.",
      "sections": [
        {"heading":"Una pantalla de retiro con un mínimo alto","paragraphs":["En la versión Android que abrimos, Beneficios mostraba saldo cero, tareas diarias y una página de retiro. Allí aparecían niveles desde R$1.510 y el texto indicaba que el retiro oficial en efectivo empieza en R$300. También había un mensaje de felicitación con el nombre de otra persona y un supuesto retiro de R$300, pero la pantalla no ofrecía una prueba independiente de ese pago.","Los importes y el botón “Sacar” son afirmaciones dentro de la interfaz. No completamos tareas, alcanzamos el mínimo ni solicitamos un retiro; por eso no podemos confirmar que el usuario reciba dinero."]},
        {"heading":"Lo que dicen las reglas de la app","paragraphs":["El panel Reglas de Beneficios indica que los bonos diarios sirven para desbloquear episodios y que, si el bono no alcanza, se usan monedas para completar el pago. Por separado, la política de privacidad de DramaStack dice que las monedas virtuales sin gastar no pueden convertirse en ninguna moneda. Eso describe valor para ver contenido dentro de la app, no dinero disponible para retirar.","La ficha de Google Play presenta DramaStack como una app de entretenimiento gratuita con anuncios y menciona recompensas opcionales por anuncios. No explica un programa de retiros en efectivo ni sus condiciones. En conjunto, la pantalla promocional de retiro y las reglas escritas no demuestran una forma fiable de ganar dinero."],"source":{"title":"DramaStack: política de privacidad","url":"https://www.dramastack.video/privacypolicy.html"}},
        {"heading":"¿DramaStack paga?","paragraphs":["Encontramos una página de retiro con un mínimo de R$300, pero no probamos un pago. La política escrita dice que las monedas virtuales no pueden convertirse en dinero y las reglas de la app vinculan los bonos al desbloqueo de episodios. Con lo que pudimos verificar, no cuentes el saldo ni las tareas como ingresos.","Si instalas la app para ver sus dramas cortos, considera las recompensas como funciones sujetas a condiciones. No gastes dinero ni muchas horas basándote solo en la pantalla de retiro: primero busca condiciones actuales y escritas que expliquen la elegibilidad, el método y una prueba de pago."],"source":{"title":"DramaStack en Google Play","url":"https://play.google.com/store/apps/details?id=com.reeltime.dramastack&hl=es"}}
      ],
      "steps":["Comprueba que el desarrollador en Google Play sea HK Reel Time Technology Limited.","Lee el panel Reglas y las condiciones y política de privacidad vigentes.","Distingue los bonos para episodios y las monedas virtuales del dinero retirable.","Antes de hacer tareas, busca condiciones por escrito sobre elegibilidad y método de retiro.","No tomes un mensaje de éxito o un saldo en pantalla como prueba de un pago."],
      "pros":["La app ofrece dramas cortos y episodios.","La pestaña Beneficios muestra condiciones para tareas y bonos."],
      "cons":["Las reglas describen bonos y monedas como valor para desbloquear episodios.","La pantalla muestra un mínimo elevado, pero no verificamos un pago."],
      "faq":[{"q":"¿DramaStack paga dinero real?","a":"No confirmamos un pago en efectivo. La pantalla de retiro muestra un mínimo de R$300, mientras que la política dice que las monedas virtuales no pueden convertirse en dinero."},{"q":"¿Puedo retirar las monedas que gano?","a":"La política de privacidad dice que las monedas virtuales no gastadas no pueden convertirse en ninguna moneda. Las reglas indican que los bonos se usan para desbloquear episodios."},{"q":"¿Probaron un retiro?","a":"No. La cuenta no tenía saldo y no completamos tareas, compras ni solicitudes de retiro."}],
      "verdict":"No recomendamos DramaStack como app para generar ingresos. La pantalla de retiro hace una promesa llamativa, pero las reglas escritas describen recompensas dentro de la app y la política dice que las monedas virtuales no se convierten en efectivo. No pudimos verificar un pago.",
      "imageAlt":"Pestaña Beneficios de DramaStack en portugués con tareas y recompensas",
      "caption":"La pestaña Beneficios muestra tareas diarias y bonos junto a un saldo cero."
    },
    {
      "id": "compare",
      "app": "compare",
      "category": "guides",
      "slug": "apps-recompensas-dinero-puntos-credito",
      "title": "¿Dinero, puntos o crédito? Cómo comparar apps de recompensas",
      "description": "Compara Google Opinion Rewards, Microsoft Rewards y Freecash por recompensa, tiempo y opciones de canje.",
      "intro": "Dos apps pueden anunciar recompensas y ofrecer cosas muy distintas. El crédito de Play, los puntos de fidelidad y los retiros sujetos a ofertas tienen usos diferentes. Identifica lo que realmente podrás usar antes de comparar las cifras más grandes.",
      "sections": [
        {
          "heading": "Tres modelos para decisiones distintas",
          "paragraphs": [
            "Google Opinion Rewards en Android utiliza crédito de Play. Microsoft Rewards ofrece puntos para un catálogo asociado a la cuenta. Freecash tiene recompensas ligadas a ofertas y condiciones de retiro. No es útil comparar estos modelos con una sola cifra promocional.",
            "Pregunta qué recibes, dónde puedes usarlo y qué requisitos separan la actividad de la recompensa. La disponibilidad depende de plataforma, país y cuenta. Comprueba las fuentes oficiales en lugar de asumir que una captura en redes vale para todos."
          ]
        },
        {
          "heading": "Incluye el coste de tu tiempo",
          "paragraphs": [
            "Fija cuánto tiempo dedicarías y si usarías esa recompensa de otra manera. Incluye las compras, la verificación y los plazos. Una oferta grande puede ser poco conveniente si exige gastos que no tenías previstos.",
            "Haz una cuenta sencilla: si una actividad requiere 30 minutos, valora si la recompensa compensa ese tiempo y si podrás usarla. Compara el importe neto, después de comisiones o compras necesarias, con tus otras opciones."
          ]
        }
      ],
      "steps": [
        "Identifica si se trata de una opción de dinero, puntos o crédito de tienda.",
        "Consulta los requisitos de país, edad, dispositivo y cuenta.",
        "Lee las condiciones de retiro, canje y caducidad.",
        "Calcula el tiempo y cualquier compra necesaria para participar.",
        "Elige una actividad pequeña y clara, conservando sus condiciones."
      ],
      "pros": [
        "Comparar tipos de recompensa evita expectativas equivocadas.",
        "Un límite de tiempo personal facilita la decisión."
      ],
      "cons": [
        "Los catálogos y las condiciones pueden cambiar.",
        "No hay una mejor app para todos los países y usuarios."
      ],
      "faq": [
        {
          "q": "¿Cuál garantiza ingresos?",
          "a": "Ninguna debe considerarse un ingreso garantizado. Disponibilidad y condiciones pueden cambiar."
        },
        {
          "q": "¿Qué diferencia hay entre saldo de tienda y dinero?",
          "a": "El saldo de tienda sirve para compras elegibles en ese servicio. El dinero retirable depende de un método de pago y puede tener mínimo, comisiones y verificación."
        },
        {
          "q": "¿Dónde verifico las reglas?",
          "a": "En la ayuda oficial y en la oferta vigente que muestra tu propia cuenta."
        }
      ],
      "verdict": "Elige por utilidad y esfuerzo. Una recompensa pequeña que puedes usar puede valer más que una cifra a la que no puedes acceder.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "En Google Opinion Rewards, el área de tareas muestra encuestas y opciones del perfil."
    },
    {
      "id": "swagbucks",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "como-funciona-swagbucks-opiniones-paga",
      "title": "Swagbucks: cómo funciona, cuánto valen los puntos SB y si vale la pena",
      "description": "Descubre cómo funciona Swagbucks, cuánto equivalen los puntos SB y qué esperar de sus encuestas pagadas, juegos móviles, cashback y retiros por PayPal.",
      "intro": "Swagbucks es una de las plataformas de recompensas y reembolsos (Get-Paid-To) más veteranas de internet, operada por Prodege, LLC. En lugar de prometer un sueldo fijo, premia actividades digitales concretas —responder encuestas de mercado, alcanzar niveles en juegos móviles y comprar en tiendas asociadas— con puntos llamados SB. Entender cuánto valen esos puntos y qué tareas compensan tu tiempo es clave antes de empezar.",
      "sections": [
        {
          "heading": "Qué es Swagbucks y cuánto equivalen los puntos SB",
          "paragraphs": [
            "Las marcas, empresas de investigación de mercado y estudios de videojuegos pagan a Swagbucks para conocer la opinión de los consumidores o conseguir nuevos jugadores. Cuando completas una tarea elegible, la plataforma comparte parte de esa comisión contigo en puntos digitales llamados SB. En el catálogo estándar de recompensas, 100 SB equivalen a 1,00 USD, por lo que 500 SB corresponden a una tarjeta regalo o retiro de 5 USD en los mercados compatibles.",
            "En el panel principal que capturamos, las opciones se dividen en cuatro áreas principales: Shop and Earn para cashback en compras online, Answer Surveys para encuestas remuneradas, Play Games para juegos de móvil y navegador, y Discover para ofertas de servicios asociados. Ten en cuenta que la cantidad de ofertas diarias depende del presupuesto publicitario en tu país; Estados Unidos, Canadá, Reino Unido y España suelen mostrar catálogos más amplios que otros mercados."
          ],
          "source": {
            "title": "Swagbucks: guía oficial How It Works",
            "url": "https://www.swagbucks.com/g/how-it-works"
          }
        },
        {
          "heading": "Cómo registrarse con invitación y configurar tu perfil",
          "paragraphs": [
            "Puedes abrir una cuenta gratuita en Swagbucks desde el enlace oficial de invitación que aparece abajo. Regístrate con el mismo correo electrónico que utilizas en tu cuenta verificada de PayPal si planeas retirar efectivo más adelante, y nunca abras varias cuentas ni utilices una VPN, ya que los controles de seguridad de Prodege bloquean los perfiles que ocultan su ubicación real.",
            "Nada más entrar, completa el cuestionario inicial de perfil: en nuestra captura, el aviso 'Get Started!' ofrecía 5 SB en unos 5 minutos para desbloquear más oportunidades de encuestas. Si invitas a amigos o te registras mediante invitación, revisa siempre las condiciones vigentes en pantalla; por ejemplo, en la oferta capturada el bono de referido exige que el invitado se registre y sume al menos 300 SB en sus primeros 30 días."
          ],
          "cta": {
            "label": "Crear cuenta gratis en Swagbucks con invitación oficial",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Expectativas reales: encuestas, juegos y cashback",
          "paragraphs": [
            "Cada canal tiene un ritmo distinto. Las encuestas cortas de nuestra captura pagaban entre 5 SB (5 minutos) y 25 SB (20 minutos): no requieren gastar dinero, aunque las preguntas filtro iniciales pueden descartarte si tu perfil no coincide con el público buscado.",
            "Los juegos móviles anuncian recompensas totales más altas —como hasta 919 SB en Farm Craze o hasta 2.373 SB en Puzzles & Chaos: Frozen Castle—, pero exigen superar niveles progresivos dentro de un plazo de 30 días y permitir el seguimiento de la app. Toma Swagbucks como un complemento para sumar saldo extra o tarjetas regalo en ratos libres, no como un ingreso mensual fijo."
          ],
          "source": {
            "title": "Swagbucks: tienda de recompensas (Rewards Store)",
            "url": "https://www.swagbucks.com/rewards-store"
          }
        }
      ],
      "steps": [
        "Abre Swagbucks mediante el enlace oficial de registro y crea tu cuenta con tu correo principal.",
        "Confirma tu correo electrónico y completa la encuesta inicial de 5 minutos para activar tu perfil.",
        "Explora las secciones Shop and Earn, Answer Surveys y Play Games para comparar el tiempo exigido por cada 100 SB (1 USD).",
        "Lee los requisitos de seguimiento, el plazo de días y el periodo pendiente antes de instalar cualquier juego u oferta.",
        "Canjea tus puntos SB acumulados en la Rewards Store por tarjetas regalo digitales o saldo de PayPal verificado."
      ],
      "pros": [
        "Conversión clara de 100 SB = 1,00 USD en tarjetas regalo y retiros por PayPal.",
        "Reúne encuestas pagadas, metas en juegos móviles y reembolsos de compras en un mismo panel."
      ],
      "cons": [
        "Los filtros demográficos en encuestas y la ubicación geográfica limitan las ganancias por hora.",
        "Las recompensas de juegos y ofertas suelen quedar pendientes varios días antes de poder retirarse."
      ],
      "faq": [
        {
          "q": "¿Swagbucks es confiable y gratis?",
          "a": "Sí. Swagbucks pertenece a Prodege, LLC y el registro es totalmente gratuito. Algunas ofertas opcionales de juegos o Discover incluyen compras, pero no es obligatorio pagar para usar la plataforma."
        },
        {
          "q": "¿Cuánto valen 1.000 puntos SB en dólares?",
          "a": "Con la tasa estándar de 100 SB por cada 1,00 USD, 1.000 SB equivalen a 10,00 USD para canjear en la tienda de recompensas."
        },
        {
          "q": "¿Puedo usar una VPN para ver más ofertas en Swagbucks?",
          "a": "No. El uso de VPN, proxies o ubicaciones simuladas infringe las normas de Prodege y suele causar el cierre de la cuenta al revisar un retiro."
        }
      ],
      "verdict": "Swagbucks es una plataforma legítima y consolidada para conseguir tarjetas regalo o dinero extra en PayPal si combinas el cashback de compras que ya ibas a realizar con metas realistas en juegos y encuestas cortas.",
      "imageAlt": "Panel de Swagbucks con ofertas de Shop and Earn y encuestas en Answer Surveys",
      "caption": "El panel principal de Swagbucks combina porcentajes de cashback en tiendas (como Walmart, eBay y Best Buy) con encuestas por tiempo.",
      "imageKey": "swagbucks-shop",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-games",
        "alt": "Catálogo Play Games and Earn de Swagbucks en Android con recompensas en SB",
        "caption": "La sección Play Games and Earn muestra títulos para Android con metas que van desde 26 SB hasta 2.373 SB.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-games",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "juegos-swagbucks-como-ganar-seguimiento",
      "title": "Juegos de Swagbucks para ganar puntos: metas por nivel, instalación QR y seguimiento",
      "description": "Analizamos cómo funcionan los juegos en Swagbucks para Android con ejemplos reales como Farm Craze (919 SB), plazos de 30 días y requisitos de seguimiento.",
      "intro": "Las ofertas de juegos móviles suelen ser la vía con mayor potencial de puntos en Swagbucks porque no sufren las descalificaciones a mitad de camino típicas de las encuestas. Sin embargo, la cifra destacada en cada tarjeta es un total acumulado por etapas, y recibir los puntos depende de que el seguimiento del dispositivo funcione desde el primer minuto.",
      "sections": [
        {
          "heading": "Cómo interpretar el catálogo de juegos: cifra total frente a metas por niveles",
          "paragraphs": [
            "En la pantalla de Android que capturamos, Swagbucks mostraba juegos de puzles, gestión y estrategia con distintos topes: Puzzles & Chaos: Frozen Castle (hasta 2.373 SB), Screw Out (hasta 1.233 SB), Merge Restaurant (hasta 1.100 SB), Farm Craze (hasta 919 SB), Box Away (hasta 618 SB), Viking Rise (hasta 596 SB) y Wood Block Jam (hasta 560 SB).",
            "La expresión 'Earn up to' (gana hasta) es clave: no recibes el total solo por descargar el juego. Al abrir la ficha de Farm Craze (hasta 919 SB en Android), la barra Goal Progress divide la recompensa en objetivos escalonados: instalar la app, una meta opcional por realizar cualquier compra (+52 SB), llegar al Nivel 30 (+1 SB), llegar al Nivel 40 (+4 SB) y niveles superiores hasta alcanzar el Nivel 2000 dentro de 30 días."
          ],
          "source": {
            "title": "Swagbucks: sección oficial de juegos",
            "url": "https://www.swagbucks.com/games"
          }
        },
        {
          "heading": "Instalación por código QR o enlace y reglas de seguimiento",
          "paragraphs": [
            "Cuando abres la oferta de un juego desde el ordenador, Swagbucks muestra un código QR ('Scan to Install') y la opción de enviarte el enlace por SMS o correo electrónico al móvil. Descarga el juego únicamente a través de ese enlace oficial en tu teléfono Android o iOS, y asegúrate de que sea la primera vez que instalas ese título en tu dispositivo y cuenta de la tienda.",
            "Puedes registrarte o entrar desde el enlace oficial de invitación de abajo para revisar los juegos disponibles en tu país. Antes de jugar, desactiva cualquier VPN, bloqueador de anuncios o retransmisión privada, acepta los permisos de seguimiento cuando el juego se abra por primera vez y comprueba en tu registro de actividad (Activity Ledger > Visited) que el clic inicial quedó anotado."
          ],
          "cta": {
            "label": "Acceder a Swagbucks con invitación para ver ofertas de juegos",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Plazo de 30 días, compras opcionales y espera de 5 días en pendiente",
          "paragraphs": [
            "En nuestra captura de Farm Craze, el recuadro 'Important Things to Know' detallaba tres condiciones habituales: llegar al nivel máximo dentro de los 30 días posteriores a la instalación, seguir los pasos de rastreo de la aplicación y tener en cuenta que la recompensa quedará pendiente durante 5 días ('Award will pend for 5 days'). Es decir, al superar un nivel, los puntos SB tardan 5 días en pasar de pendientes a saldo disponible.",
            "Revisa tu barra Goal Progress nada más completar el primer nivel sencillo (como el Nivel 30). Si esa primera meta no se marca como pendiente, detente antes de invertir decenas de horas en niveles altos. Además, calcula si las metas de compra dentro de la app (como +52 SB, equivalentes a 0,52 USD) cuestan más dinero del que devuelven."
          ],
          "source": {
            "title": "Prodege: condiciones de uso y elegibilidad de ofertas",
            "url": "https://www.prodege.com/terms-of-use/"
          }
        }
      ],
      "steps": [
        "Filtra la sección Play Games según el sistema de tu teléfono (Android o iOS) para ver títulos compatibles.",
        "Abre la ficha del juego y revisa todas las metas de Goal Progress junto con el límite de días.",
        "Escanea el código QR de Swagbucks o abre el enlace enviado por correo/SMS en un móvil donde nunca hayas instalado ese juego.",
        "Acepta los permisos de seguimiento al abrir el juego y mantén apagados los bloqueadores de anuncios y las VPN.",
        "Comprueba que la instalación y la primera meta de nivel bajo se registren en Goal Progress antes de dedicar tiempo a niveles avanzados."
      ],
      "pros": [
        "La barra Goal Progress detalla cuántos SB paga cada nivel y el plazo exacto en días.",
        "Mayor potencial de acumulación de puntos que las encuestas cortas si te gustan los juegos móviles."
      ],
      "cons": [
        "Los últimos niveles (como el Nivel 2000 en 30 días) suelen exigir muchas horas de juego constante.",
        "El seguimiento falla si ya habías instalado el juego antes o si bloqueas el rastreo del dispositivo."
      ],
      "faq": [
        {
          "q": "¿Por qué no aparece como pendiente el nivel que completé en un juego?",
          "a": "El rastreo suele fallar si ya habías descargado el juego anteriormente, usaste VPN o bloqueador de anuncios, rechazaste el permiso de seguimiento o cambiaste de dispositivo."
        },
        {
          "q": "¿Tengo que llegar al último nivel para cobrar algo?",
          "a": "No. En ofertas por etapas como Farm Craze, cada meta superada (por ejemplo, Nivel 30 o Nivel 40) acredita sus propios SB aunque decidas no seguir hasta el nivel final."
        },
        {
          "q": "¿Qué significa 'Award will pend for 5 days'?",
          "a": "Significa que, una vez validada la meta del juego, los puntos SB permanecen 5 días en estado pendiente mientras el anunciante confirma la actividad antes de liberarlos para retiro."
        }
      ],
      "verdict": "Los juegos de Swagbucks compensan cuando eliges títulos cuyas metas intermedias sean alcanzables sin pagar y verificas que el seguimiento funcione en el primer nivel.",
      "imageAlt": "Catálogo de juegos Android en Swagbucks con Screw Out, Farm Craze y Puzzles & Chaos",
      "caption": "El catálogo de juegos para Android muestra el máximo de SB acumulables en títulos casuales, de puzles y de estrategia.",
      "imageKey": "swagbucks-games",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-offer",
        "alt": "Ficha del juego Farm Craze en Swagbucks con código QR, reglas de 30 días y progreso de metas",
        "caption": "Ficha de Farm Craze: instalación mediante código QR, límite de 30 días, aviso de 5 días pendientes y desglose por niveles.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-surveys",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "encuestas-pagadas-y-cashback-en-swagbucks",
      "title": "Encuestas pagadas y cashback en Swagbucks: cómo sumar puntos SB con criterio",
      "description": "Guía práctica sobre las encuestas de Swagbucks y el reembolso de Shop and Earn en tiendas como Walmart, eBay y Expedia, además de cómo evitar filtros de perfil.",
      "intro": "No todos los usuarios quieren dedicar un mes a subir niveles en un juego móvil. Para quienes prefieren tareas rápidas desde el navegador o recuperar un porcentaje de las compras online que ya tenían previstas, Swagbucks ofrece dos canales directos: Answer Surveys y el portal de reembolsos Shop and Earn.",
      "sections": [
        {
          "heading": "Cómo funcionan las encuestas en Answer Surveys y por qué ocurren descartes",
          "paragraphs": [
            "En la pantalla de Swagbucks que capturamos, la fila Answer Surveys and Earn mostraba cada cuestionario con su duración estimada y recompensa: 5 SB por 5 minutos (Survey #201976545), 10 SB por 5 minutos y 25 SB por 20 minutos, además del bloque inicial 'Get Started! Earn 5 SB in about 5 minutes'.",
            "Cada estudio de mercado busca un perfil demográfico específico. Las primeras preguntas sirven como filtro de clasificación; si tus respuestas no encajan con la cuota que busca la marca, la encuesta se cierra antes de terminar. Responde siempre con datos coherentes y reales, ya que contestar al azar o contradecir tu perfil puede bloquear el acceso a nuevas encuestas."
          ],
          "source": {
            "title": "Swagbucks: información sobre encuestas remuneradas",
            "url": "https://www.swagbucks.com/g/paid-surveys"
          }
        },
        {
          "heading": "Shop and Earn: cómo recibir puntos SB por tus compras online",
          "paragraphs": [
            "El apartado Shop and Earn funciona como un portal de cashback donde las tiendas asociadas pagan una comisión a Swagbucks y tú recibes un porcentaje de tu compra en forma de puntos SB. En nuestra captura aparecían reembolsos como Walmart (hasta 8% de cashback, o 8 SB por cada 1 USD), eBay (hasta 5%), Best Buy (hasta 6%), Kohl's (4%), Expedia (hasta 12%), Hotels.com (hasta 12%) y QVC, HSN y The Home Depot (hasta 15%, o 15 SB por cada 1 USD).",
            "Puedes crear tu cuenta gratuita desde el enlace oficial de invitación de abajo para consultar qué tiendas y encuestas están activas en tu región. Para que el reembolso se registre sin fallos, entra a la tienda desde Swagbucks con el carrito vacío y no actives extensiones de cupones de otros sitios durante el pago."
          ],
          "cta": {
            "label": "Registrarse gratis en Swagbucks para ver encuestas y cashback",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Consejos prácticos para cuidar tu tiempo y tu bolsillo",
          "paragraphs": [
            "En las encuestas, fíjate en la relación entre puntos SB y minutos estimados. Una encuesta de 5 minutos que paga 10 SB rinde mejor por minuto que una de 20 minutos por 25 SB, y además pierdes menos tiempo si el filtro demográfico te descarta.",
            "En Shop and Earn, utiliza el cashback únicamente en compras que ya necesitabas hacer. Comprar un producto solo porque ofrece un 15% en puntos SB significa gastar el 85% restante de tu bolsillo; compara primero el precio final entre tiendas."
          ],
          "source": {
            "title": "Swagbucks: directorio de tiendas Shop and Earn",
            "url": "https://www.swagbucks.com/shop"
          }
        }
      ],
      "steps": [
        "Crea tu cuenta gratuita en Swagbucks y completa el perfil inicial de 5 minutos en Answer Surveys.",
        "Prioriza encuestas cortas de 5 a 10 minutos con buena relación entre puntos SB y tiempo.",
        "Antes de comprar en tiendas como Walmart, eBay, Best Buy o Expedia, busca el comercio dentro de Shop and Earn.",
        "Revisa las categorías excluidas de la tienda y desactiva extensiones externas de cupones antes de abrir el enlace.",
        "Verifica en tu Activity Ledger que la visita a la tienda o la encuesta completada haya quedado registrada."
      ],
      "pros": [
        "Las encuestas no exigen gastar dinero y muestran el tiempo estimado antes de empezar.",
        "El portal Shop and Earn devuelve entre 1% y 15% (1 a 15 SB por dólar) en comercios conocidos."
      ],
      "cons": [
        "Es frecuente quedar descartado en encuestas si tu perfil no coincide con la muestra buscada.",
        "Los puntos de cashback suelen tardar semanas en liberarse mientras vence el plazo de devolución de la tienda."
      ],
      "faq": [
        {
          "q": "¿Por qué me descalifican de algunas encuestas en Swagbucks?",
          "a": "Las empresas de análisis cierran el cuestionario cuando el cupo para tu edad, región o perfil de consumo ya se completó o cuando buscan un comprador específico."
        },
        {
          "q": "¿Qué significa ganar hasta 15 SB por cada 1 USD en Shop and Earn?",
          "a": "Cada 1% de cashback equivale a 1 punto SB por cada dólar gastado antes de impuestos y envío en las categorías elegibles de esa tienda."
        },
        {
          "q": "¿Puedo usar otra extensión de cashback al mismo tiempo?",
          "a": "No. Activar otra extensión en el navegador durante la compra suele reemplazar el enlace de afiliado de Swagbucks y anular tus puntos SB."
        }
      ],
      "verdict": "Aprovecha Answer Surveys para sumar puntos rápidos sin gastar dinero en ratos libres y activa Shop and Earn como un descuento adicional solo en compras que ya tenías planeadas.",
      "imageAlt": "Tiendas con cashback en Shop and Earn y encuestas disponibles en Swagbucks",
      "caption": "Shop and Earn indica el porcentaje de reembolso y los SB por dólar junto a la lista de encuestas rápidas.",
      "imageKey": "swagbucks-shop",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-goals",
        "alt": "Panel de condiciones de oferta e invitaciones en Swagbucks",
        "caption": "Cada oferta detalla el seguimiento requerido, los días en estado pendiente y las reglas de referidos.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-cashout",
      "app": "swagbucks",
      "category": "guides",
      "slug": "como-retirar-dinero-swagbucks-paypal-tarjetas",
      "title": "Cómo retirar dinero en Swagbucks: PayPal, tarjetas regalo y puntos SB pendientes",
      "description": "Entiende por qué los puntos SB quedan pendientes varios días, cómo canjear tu saldo por PayPal o tarjetas regalo y qué requisitos de verificación existen.",
      "intro": "Acumular puntos SB es solo la primera mitad del proceso en Swagbucks; transformarlos en dinero dentro de PayPal o en una tarjeta regalo exige superar dos etapas: esperar a que los puntos pendientes se liberen y cumplir los requisitos de verificación en la Rewards Store. Conocer estas reglas de antemano evita retrasos en tu primer retiro.",
      "sections": [
        {
          "heading": "Puntos SB pendientes frente a saldo disponible: por qué hay espera",
          "paragraphs": [
            "Cuando alcanzas una meta en un juego móvil, completas un registro en Discover o realizas una compra con cashback, los puntos rara vez se pueden retirar en el acto. En la oferta de Farm Craze que capturamos, las condiciones indican claramente: 'Award will pend for 5 days' (la recompensa quedará pendiente durante 5 días). Durante ese plazo, los SB aparecen en tu Activity Ledger con una fecha de liberación mientras el anunciante valida la actividad.",
            "Solo puedes canjear los SB que ya cumplieron su periodo pendiente y pasaron a tu saldo disponible. Las encuestas cortas suelen acreditarse al instante, mientras que los niveles de juegos, ofertas financieras como Coinbase y compras en tiendas tienen esperas de entre 5 y más de 30 días según el comercio."
          ],
          "source": {
            "title": "Swagbucks: catálogo de la Rewards Store",
            "url": "https://www.swagbucks.com/rewards-store"
          }
        },
        {
          "heading": "Efectivo en PayPal o tarjetas regalo: haz coincidir tus datos",
          "paragraphs": [
            "En la tienda de recompensas de Swagbucks, la referencia habitual es 100 SB = 1,00 USD. Las tarjetas regalo digitales (como Amazon, Walmart o Target según el país) suelen ofrecer mínimos de entrada bajos —a menudo desde 300 o 500 SB— y en ocasiones aplican un pequeño descuento mensual en el primer canje de ciertas denominaciones.",
            "Si prefieres retirar dinero a PayPal, el correo electrónico de tu cuenta de Swagbucks debe coincidir exactamente con el correo de tu cuenta verificada de PayPal, al igual que tu nombre y apellido. Regístrate desde el enlace oficial de abajo usando directamente el mismo correo de tu PayPal para evitar bloqueos al momento de cobrar."
          ],
          "cta": {
            "label": "Registrarse en Swagbucks con el correo de tu cuenta PayPal",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Verificación del primer retiro y plazos de entrega",
          "paragraphs": [
            "Al confirmar un pedido en la Rewards Store, Swagbucks solicita verificar la operación, normalmente mediante un código SMS enviado a un número de teléfono móvil real (no se admiten números virtuales VoIP) o mediante tu pregunta de seguridad. En el primer retiro o en importes altos también pueden solicitar una verificación puntual de identidad.",
            "Una vez confirmado el canje, el envío no es instantáneo: tanto las transferencias a PayPal como las tarjetas regalo electrónicas suelen tardar de 2 a 5 días laborables (y hasta 10 días laborables en revisiones puntuales). Puedes consultar el avance de cada solicitud en el apartado My Rewards de tu cuenta."
          ],
          "source": {
            "title": "Prodege: condiciones de uso y políticas de canje",
            "url": "https://www.prodege.com/terms-of-use/"
          }
        }
      ],
      "steps": [
        "Consulta tu Activity Ledger para ver qué día terminan su espera tus puntos SB pendientes.",
        "Asegúrate de que tu correo y nombre en Swagbucks coincidan con los de tu cuenta verificada de PayPal.",
        "Entra en la Rewards Store y selecciona la tarjeta regalo digital o el importe de PayPal acorde a tu saldo disponible.",
        "Completa la confirmación por SMS en tu móvil o la verificación solicitada por el sistema.",
        "Sigue el estado del pedido en My Rewards y calcula de 2 a 5 días laborables para recibir el pago."
      ],
      "pros": [
        "Permite elegir entre dinero en PayPal y tarjetas regalo de grandes comercios según tu región.",
        "El Activity Ledger informa con claridad cuántos días quedan pendientes los puntos de cada oferta."
      ],
      "cons": [
        "El saldo en estado Pending no se puede retirar hasta que finaliza la cuenta atrás.",
        "Exige coincidencia exacta de correo con PayPal, teléfono no VoIP y de 2 a 5 días hábiles de procesamiento."
      ],
      "faq": [
        {
          "q": "¿Por qué no puedo retirar mis puntos SB pendientes de inmediato?",
          "a": "Los SB pendientes se retienen durante un plazo fijo —como los 5 días indicados en el juego Farm Craze— para que el anunciante confirme que la meta se completó correctamente."
        },
        {
          "q": "¿El correo de PayPal tiene que ser el mismo que uso en Swagbucks?",
          "a": "Sí. Para procesar pagos por PayPal, Swagbucks exige que el correo electrónico de ambas cuentas coincida y que la cuenta de PayPal esté verificada."
        },
        {
          "q": "¿Cuánto tarda Swagbucks en enviar un pago a PayPal?",
          "a": "Tras confirmar el pedido, la mayoría de los pagos a PayPal y tarjetas regalo digitales tardan entre 2 y 5 días laborables en entregarse."
        }
      ],
      "verdict": "Configura tu cuenta de Swagbucks desde el primer día con el mismo correo de tu PayPal verificado y ten a mano un número móvil real para confirmar por SMS cuando tus puntos pendientes pasen a saldo disponible.",
      "imageAlt": "Panel de oferta en Swagbucks indicando 5 días pendientes y barra Goal Progress",
      "caption": "Las reglas de la oferta especifican los días de espera ('Award will pend for 5 days') encima del seguimiento de metas.",
      "imageKey": "swagbucks-goals",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-offer",
        "alt": "Ventana completa de la oferta Farm Craze en Swagbucks con instalación QR y niveles",
        "caption": "Revisar la ficha completa antes de jugar te permite conocer el plazo pendiente, el sistema requerido y el límite de 30 días.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-vs-freecash",
      "app": "swagbucks",
      "category": "guides",
      "slug": "swagbucks-vs-freecash-comparativa-sitios-recompensas",
      "title": "Swagbucks vs. Freecash: ¿qué sitio de recompensas e ingresos extra te conviene más?",
      "description": "Comparamos Swagbucks y Freecash en ofertas de juegos móviles, encuestas pagadas, cashback de compras, tiempos de espera y requisitos de retiro.",
      "intro": "Swagbucks y Freecash son dos de las plataformas Get-Paid-To (GPT) más buscadas por quienes quieren ganar un ingreso extra por internet. Ambas pagan por probar juegos móviles, completar ofertas y responder encuestas, pero se diferencian claramente en el reembolso por compras online, los requisitos del primer retiro y el catálogo disponible en cada país.",
      "sections": [
        {
          "heading": "Dónde destaca Swagbucks: portal de cashback además de juegos y encuestas",
          "paragraphs": [
            "Freecash se centra sobre todo en metas de juegos móviles, muros de ofertas y encuestas. Swagbucks cubre esas mismas áreas —nuestra captura en Android mostró juegos como Puzzles & Chaos (hasta 2.373 SB) y Screw Out (hasta 1.233 SB) junto a Coinbase en Discover—, pero añade un portal propio de cashback (Shop and Earn) con tiendas como Walmart (hasta 8%), eBay (hasta 5%) y The Home Depot (hasta 15%).",
            "Si ya realizas compras por internet o prefieres empezar con tareas sencillas como encuestas de 5 minutos (de 5 a 10 SB), Swagbucks ofrece más alternativas cuando no hay juegos nuevos que te interesen."
          ],
          "source": {
            "title": "Swagbucks: funcionamiento y canales de puntos",
            "url": "https://www.swagbucks.com/g/how-it-works"
          }
        },
        {
          "heading": "Comparativa de juegos móviles, seguimiento e invitaciones",
          "paragraphs": [
            "En ambas plataformas, las ofertas de juegos reparten el premio total en niveles progresivos con un límite de 30 días y un periodo de validación (como los 5 días pendientes que muestra Farm Craze en Swagbucks). Como las ofertas de juegos solo valen para nuevos usuarios que instalan la app por primera vez en su dispositivo, muchos usuarios mantienen cuenta en los dos sitios y comparan cuál paga mejor por un título concreto antes de descargarlo.",
            "Puedes abrir tu cuenta de Swagbucks mediante el enlace oficial de invitación de abajo y comparar su catálogo de juegos activos con el de Freecash antes de elegir tu próxima meta."
          ],
          "cta": {
            "label": "Abrir Swagbucks con invitación oficial para comparar ofertas",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Mínimos de retiro, verificación y métodos de cobro",
          "paragraphs": [
            "Como vimos en nuestra guía de Freecash, su centro de ayuda indica un mínimo inicial de retiro de 25 USD (variable según la región) junto con verificación de correo e identidad, ofreciendo pagos en criptomonedas, transferencia bancaria y tarjetas regalo. Swagbucks valora 100 SB en 1,00 USD y permite canjear tarjetas regalo digitales y efectivo en PayPal desde importes iniciales más bajos en muchos mercados, siempre que tu correo coincida con tu cuenta PayPal verificada y confirmes el pedido por SMS.",
            "Ninguna de las dos plataformas sustituye un empleo, y ambas prohíben terminantemente el uso de VPN o cuentas múltiples. Revisa el catálogo real de tu país en ambos paneles antes de dedicar horas a una oferta larga."
          ],
          "source": {
            "title": "Freecash: requisitos del primer retiro",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        }
      ],
      "steps": [
        "Crea tus cuentas en Swagbucks y Freecash usando tu ubicación real y tu correo principal.",
        "Antes de instalar un juego móvil, busca el título en ambas plataformas para comparar los puntos totales, los niveles exigidos y los días pendientes.",
        "Usa la sección Shop and Earn de Swagbucks cuando vayas a realizar compras online previstas en tiendas asociadas.",
        "Descarga cada juego elegido únicamente desde el enlace de la plataforma seleccionada y acepta el seguimiento de la app.",
        "Controla los días pendientes y el mínimo de retiro en cada panel para planificar cuándo podrás cobrar tu saldo."
      ],
      "pros": [
        "Swagbucks suma entre 1% y 15% de cashback en tiendas y tarjetas regalo de bajo mínimo junto a los juegos.",
        "Comparar ambos catálogos te permite elegir la mejor tabla de niveles antes de instalar un juego nuevo."
      ],
      "cons": [
        "No puedes cobrar la misma oferta de nuevo usuario de un juego móvil en ambas plataformas con el mismo teléfono.",
        "La cantidad de encuestas, juegos y métodos de retiro varía mucho según el país en ambos servicios."
      ],
      "faq": [
        {
          "q": "¿Puedo usar Swagbucks y Freecash al mismo tiempo?",
          "a": "Sí, puedes tener cuenta en cada plataforma, pero cada oferta de instalación de un juego móvil para nuevos usuarios solo se puede completar en una de las dos por dispositivo."
        },
        {
          "q": "¿Cuál es mejor para recibir cashback por compras online?",
          "a": "Swagbucks cuenta con el portal integrado Shop and Earn con tiendas como Walmart, eBay, Best Buy y Expedia, mientras que Freecash se enfoca en juegos y muros de ofertas."
        },
        {
          "q": "¿Cómo se comparan los puntos de cada sitio?",
          "a": "En Swagbucks, 100 SB equivalen a 1,00 USD. En Freecash, 1.000 monedas equivalen a 1,00 USD. Compara siempre el valor en dólares y la dificultad de los niveles."
        }
      ],
      "verdict": "Elige Swagbucks si buscas un panel completo que combine cashback de compras, encuestas y retiros por PayPal o tarjetas regalo. Mantén ambas cuentas si juegas en el móvil y quieres comparar qué plataforma ofrece mejores metas para cada título.",
      "imageAlt": "Ofertas de juegos móviles y sección Discover en Swagbucks para Android",
      "caption": "Swagbucks reúne metas en juegos para Android junto a ofertas de Discover como Coinbase.",
      "imageKey": "swagbucks-games",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-shop",
        "alt": "Portal de cashback Shop and Earn y encuestas en Swagbucks",
        "caption": "A diferencia de los sitios centrados solo en muros de ofertas, Swagbucks integra un portal de reembolsos que paga hasta 15 SB por dólar.",
        "wide": true
      }
    }
  ],
  "pt": [
    {
      "id": "lens",
      "app": "lens",
      "category": "tools",
      "slug": "como-usar-google-lens",
      "title": "Google Lens: um jeito mais simples de buscar o que você vê",
      "description": "Busque por imagem, copie textos e traduza com o Google Lens. Veja como usar no celular e aproveitar melhor os resultados.",
      "intro": "O Google Lens transforma uma imagem no ponto de partida de uma busca. Você pode procurar um objeto sem saber o nome, copiar um trecho de texto ou entender uma placa. O mais importante é conferir a fonte por trás do resultado e reconhecer os limites de uma identificação visual.",
      "sections": [
        {
          "heading": "O que dá para fazer com uma imagem",
          "paragraphs": [
            "O Lens permite buscar objetos semelhantes, reconhecer texto e traduzir palavras em uma imagem. O Google documenta o acesso pelo app Google em dispositivos Android e iOS compatíveis. Também é possível começar por uma foto ou captura salva; os controles variam conforme o aparelho.",
            "Uma correspondência visual é uma pista. Compare detalhes e abra a página original antes de confiar em uma identificação. Iluminação, enquadramento e objetos parecidos podem levar a um resultado enganoso."
          ]
        },
        {
          "heading": "Copiar e traduzir com atenção",
          "paragraphs": [
            "Enquadre um texto nítido, selecione as palavras reconhecidas e confira números, nomes e quebras de linha antes de colar. Traduções precisam de contexto; quando o resultado afetar uma decisão importante, verifique por outra fonte.",
            "Para aprender, use uma imagem sem informações privadas. A documentação do Google explica as opções de histórico de pesquisa visual para quem deseja entender como essas buscas podem ser salvas."
          ]
        }
      ],
      "steps": [
        "Abra o app Google e procure o ícone de câmera do Lens na barra de pesquisa.",
        "Escolha uma imagem salva ou enquadre um objeto, concedendo apenas o acesso necessário.",
        "Ajuste a seleção para destacar o objeto ou texto relevante.",
        "Confira a fonte do resultado ou revise o texto antes de copiar e traduzir."
      ],
      "pros": [
        "Ajuda a buscar quando você não conhece o nome do objeto.",
        "Reúne busca visual e ferramentas práticas de texto."
      ],
      "cons": [
        "Uma correspondência visual pode estar errada.",
        "Funções e controles variam entre aparelhos."
      ],
      "faq": [
        {
          "q": "Preciso pagar para usar o Google Lens?",
          "a": "O Google Lens é gratuito. Você pode acessá-lo pelo app Google nos aparelhos compatíveis."
        },
        {
          "q": "Posso usar uma foto que já está no celular?",
          "a": "Sim. O Google documenta o uso de fotos e capturas existentes nas interfaces compatíveis com o Lens."
        },
        {
          "q": "O resultado é sempre correto?",
          "a": "Não. Confira a fonte original e o contexto antes de confiar em uma resposta, especialmente em decisões importantes."
        }
      ],
      "verdict": "Um atalho útil para pesquisar e lidar com texto. Comece com uma foto simples e confira a fonte por trás da resposta.",
      "imageAlt": "Google Lens",
      "caption": "O Google Lens permite começar uma busca a partir de uma imagem."
    },
    {
      "id": "opinion",
      "app": "opinion",
      "category": "rewards",
      "slug": "google-opinion-rewards-como-funciona",
      "title": "Google Opinion Rewards: como funcionam pesquisas e créditos",
      "description": "Saiba como responder pesquisas no Google Opinion Rewards, receber créditos na Play Store e acompanhar o saldo no Android.",
      "intro": "O Google Opinion Rewards oferece recompensas por pesquisas elegíveis. No Android, a recompensa é crédito na Google Play. Essa diferença é essencial para quem procura dinheiro que possa sacar para uma conta bancária.",
      "sections": [
        {
          "heading": "Entenda primeiro o tipo de recompensa",
          "paragraphs": [
            "A documentação do Google descreve crédito de Play no Android. A versão para iOS tem disponibilidade e regras de pagamento diferentes. Consulte a informação da sua plataforma e do seu país antes de aplicar uma experiência publicada em outro mercado.",
            "O Google informa que os créditos de pesquisas no Android expiram um ano depois de recebidos. Use a mesma conta Google no Play e no Opinion Rewards para evitar confusão sobre o saldo."
          ]
        },
        {
          "heading": "Pesquisas não são uma renda previsível",
          "paragraphs": [
            "A elegibilidade e as oportunidades dependem do serviço e do perfil. Não existe um valor diário confiável para organizar o orçamento. Leia as perguntas e responda com honestidade, sem inventar informações para tentar receber mais pesquisas.",
            "Quando chegar uma pesquisa, observe o prazo exibido no aplicativo. Algumas oportunidades expiram em 24 horas. Manter o perfil atualizado e responder com atenção ajuda a aproveitar as pesquisas compatíveis com você."
          ]
        },
        {
          "heading": "Quando o crédito aparece e onde usar",
          "paragraphs": [
            "O Google informa que os créditos podem levar alguns dias para entrar. No Android, use o saldo em compras elegíveis na Play Store com a mesma conta; cada crédito vence após um ano."
          ],
          "source": {
            "title": "Google: resgatar recompensas",
            "url": "https://support.google.com/opinionrewards/answer/6322284?hl=pt-BR"
          }
        }
      ],
      "steps": [
        "Encontre o app na loja oficial e confirme que o desenvolvedor é Google LLC.",
        "Confira os países disponíveis e a idade mínima da sua plataforma.",
        "Use sua conta Google e leia as perguntas e os termos antes de aceitar.",
        "Aguarde uma pesquisa elegível, responda com honestidade e confira o tipo de recompensa.",
        "No Android, revise o saldo de Play e a validade antes de usar o crédito."
      ],
      "pros": [
        "Pesquisas curtas de um fornecedor identificado.",
        "Pode ajudar com compras elegíveis na Google Play."
      ],
      "cons": [
        "Crédito de Play é diferente de dinheiro para sacar.",
        "Quantidade e frequência das pesquisas não são previsíveis."
      ],
      "faq": [
        {
          "q": "Dá para sacar os créditos do Android por Pix?",
          "a": "No Android, as recompensas são créditos para compras elegíveis na Google Play, sem saque por Pix."
        },
        {
          "q": "Quanto tempo demora para receber?",
          "a": "Segundo o Google, o crédito pode levar alguns dias para aparecer depois da pesquisa. Confira o histórico no aplicativo."
        },
        {
          "q": "Preciso responder todas as pesquisas?",
          "a": "Não. A participação é opcional e a quantidade de pesquisas varia."
        }
      ],
      "verdict": "Pode fazer sentido para quem já usa crédito na Google Play. Para despesas que exigem dinheiro, não trate essa recompensa do Android como substituto.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "A área de tarefas reúne pesquisas disponíveis e opções para completar o perfil."
    },
    {
      "id": "microsoft",
      "app": "microsoft",
      "category": "rewards",
      "slug": "guia-pontos-microsoft-rewards",
      "title": "Microsoft Rewards: entenda os pontos antes de acumular",
      "description": "Veja como ganhar pontos no Microsoft Rewards, escolher recompensas e acompanhar o resgate no catálogo da sua região.",
      "intro": "O Microsoft Rewards usa pontos para acessar recompensas elegíveis. Antes de mudar seus hábitos, confira o catálogo da sua conta e veja se as opções são úteis para você. Os pontos não têm valor em dinheiro.",
      "sections": [
        {
          "heading": "Comece pelo catálogo de recompensas",
          "paragraphs": [
            "A Microsoft descreve formas de ganhar pontos com atividades elegíveis em seus serviços. As atividades e os catálogos variam conforme a região. Uma oferta mostrada em outro país não garante as mesmas condições na sua conta.",
            "Escolha uma recompensa que você realmente usaria e confira os pontos necessários. Depois considere as atividades que já faria. Comprar apenas para acumular pontos pode custar mais do que o benefício recebido."
          ]
        },
        {
          "heading": "Confira as regras antes do resgate",
          "paragraphs": [
            "Use o painel oficial para consultar as instruções atuais. A Microsoft recomenda não usar VPN ao resgatar. Evite automação e localização enganosa; não compartilhe seu acesso com quem promete atalhos para acumular pontos.",
            "O resgate pode exigir a confirmação de um telefone celular ou fixo; números VoIP não são aceitos. Confira também se a recompensa ainda está disponível no catálogo e se você está na mesma região da conta."
          ]
        },
        {
          "heading": "Como acompanhar a entrega da recompensa",
          "paragraphs": [
            "Depois do resgate, abra Resgatar > Histórico de pedidos e consulte o status. O e-mail de confirmação também ajuda a localizar a recompensa. Se ele não chegar, use a opção de reenvio no histórico.",
            "O prazo deve ser conferido no pedido e nas condições do item escolhido. Um vale-presente e um crédito na conta têm formas de entrega diferentes; pontos acumulados ainda não são uma recompensa resgatada."
          ],
          "source": {
            "title": "Microsoft: acompanhar pedidos do Rewards",
            "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/track-my-microsoft-rewards-orders"
          }
        }
      ],
      "steps": [
        "Abra o Microsoft Rewards e leia a informação da sua região.",
        "Se decidir participar, entre com sua própria conta Microsoft.",
        "Confira as atividades e o catálogo antes de dedicar tempo aos pontos.",
        "Leia as condições da recompensa e a verificação exigida.",
        "Faça o resgate apenas quando os dados e a conta estiverem corretos."
      ],
      "pros": [
        "Painel oficial para acompanhar pontos elegíveis.",
        "Pode combinar com atividades que você já realiza."
      ],
      "cons": [
        "Os pontos não são dinheiro e os catálogos variam.",
        "Ofertas, pontuação exigida e elegibilidade podem mudar."
      ],
      "faq": [
        {
          "q": "Pontos do Microsoft Rewards são dinheiro?",
          "a": "Não. A Microsoft informa que os pontos não têm valor em dinheiro e são usados nas recompensas elegíveis do programa."
        },
        {
          "q": "As recompensas são iguais em todos os países?",
          "a": "Não. As ofertas e os catálogos de resgate variam conforme a região."
        },
        {
          "q": "Como encontro o código de uma recompensa?",
          "a": "Abra Resgatar > Histórico de pedidos e selecione os detalhes da recompensa. Ali você encontra o código ou link disponível e pode reenviar o e-mail de confirmação."
        }
      ],
      "verdict": "Consulte primeiro seu catálogo. O programa faz mais sentido se oferecer algo útil por atividades que você já quer fazer.",
      "imageAlt": "Microsoft Rewards",
      "caption": "O Microsoft Rewards reúne pontos e recompensas vinculados à conta Microsoft."
    },
    {
      "id": "freecash",
      "app": "freecash",
      "category": "rewards",
      "slug": "freecash-ofertas-convites",
      "title": "Freecash: como funciona, convites e prazos de saque",
      "description": "Conheça o Freecash: como funcionam as ofertas, os convites, os requisitos do primeiro saque e os prazos de pagamento.",
      "intro": "O Freecash reúne jogos, pesquisas e outras ofertas que podem gerar recompensas. Cada atividade tem objetivos e prazos próprios, e as opções disponíveis mudam conforme o aparelho, a região e a conta. Antes de começar, vale entender como a oferta é validada e como funciona o saque.",
      "sections": [
        {
          "heading": "Como funcionam as ofertas",
          "paragraphs": [
            "Confira o objetivo, o prazo e as ações exigidas antes de iniciar. Em jogos, por exemplo, a recompensa pode depender de alcançar uma fase específica. Guarde as instruções da oferta para acompanhar o progresso.",
            "Considere também o tempo e qualquer compra necessária. Priorize atividades que combinam com seu interesse e compare o valor da recompensa com o esforço exigido. Se a lista estiver vazia, confira depois: a disponibilidade pode mudar."
          ]
        },
        {
          "heading": "Como acessar pelo convite",
          "paragraphs": [
            "Use o botão abaixo para abrir o Freecash pelo convite. Você também pode copiar o código 3C7GKG para guardar o identificador do link. As condições de uma promoção aparecem no próprio Freecash.",
            "Convites e promoções podem depender de país, conta e atividades elegíveis. Confira os requisitos exibidos antes de contar com um bônus no saldo."
          ]
        },
        {
          "heading": "Primeiro saque: mínimo e verificação",
          "paragraphs": [
            "A ajuda do Freecash informa mínimo inicial de US$ 25, variável por região, e verificação de e-mail e identidade. O valor aplicável aparece em Cashout. Confira a taxa antes de confirmar."
          ],
          "source": {
            "title": "Freecash: requisitos do primeiro saque",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        },
        {
          "heading": "Quanto tempo leva para receber?",
          "paragraphs": [
            "Segundo o Freecash, verificações de segurança podem levar até 30 minutos; transferências bancárias, Stash e Revolut podem levar de 3 a 5 dias úteis. O prazo depende do método e da análise do pedido.",
            "Acompanhe o status em My Withdrawals. A liberação da recompensa de uma oferta é uma etapa anterior ao saque: confira primeiro se o valor está disponível para retirada."
          ],
          "source": {
            "title": "Freecash: prazos e saques pendentes",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/why-withdrawal-pending"
          }
        }
      ],
      "steps": [
        "Abra o site oficial ou sua página verificada na loja de aplicativos.",
        "Leia a elegibilidade da conta e as condições do seu país antes de aderir.",
        "Escolha uma oferta e registre as ações, o prazo e os gastos exigidos.",
        "Confira as informações de saque e verificação na sua própria conta.",
        "Se usar um convite, verifique se o programa se aplica à sua região."
      ],
      "pros": [
        "É possível revisar uma oferta antes de decidir participar.",
        "A ajuda oficial explica os requisitos de indicação."
      ],
      "cons": [
        "A recompensa depende de ações e elegibilidade.",
        "Tempo, gastos e verificação afetam o valor da oferta."
      ],
      "faq": [
        {
          "q": "Qual é o código do convite?",
          "a": "O identificador do link de convite é 3C7GKG. Você pode copiá-lo ou acessar diretamente pelo botão do Freecash nesta página."
        },
        {
          "q": "O convite libera um bônus na hora?",
          "a": "As promoções têm requisitos próprios. Confira as atividades elegíveis e as condições exibidas na sua conta."
        },
        {
          "q": "Onde acompanho meu saque?",
          "a": "Na área Cashout, abra My Withdrawals para conferir o status do pedido. Se houver rejeição ou atraso fora do prazo informado, procure o suporte."
        }
      ],
      "verdict": "Leia cada oferta com atenção. Comece apenas quando entender as condições, o tempo necessário e a verificação.",
      "imageAlt": "Freecash",
      "caption": "A área de convites permite copiar o link para acessar ou compartilhar o Freecash."
    },
    {
      "id": "dramastack",
      "app": "dramastack",
      "category": "rewards",
      "slug": "dramastack-paga-mesmo",
      "title": "DramaStack paga mesmo? Recompensas, saque e o que os termos dizem",
      "description": "Conferimos as tarefas, os níveis de saque, a página da Play Store e os termos do DramaStack.",
      "intro": "O DramaStack é um app de dramas curtos, mas a aba Benefícios também exibe tarefas, saldo e opções de saque. A tela parece oferecer dinheiro. As regras do próprio aplicativo descrevem as recompensas de outro jeito, então vale conferir os termos antes de gastar tempo nas tarefas.",
      "sections": [
        {"heading":"Uma tela de saque com valor mínimo alto","paragraphs":["Na versão Android que abrimos, Benefícios mostrava saldo zerado, tarefas diárias e uma página de saque. Nela, os níveis começavam em R$ 1,51 mil e o texto dizia que o saque oficial em dinheiro começa em R$ 300. Também aparecia uma mensagem parabenizando outra pessoa por um suposto saque de R$ 300, mas a tela não apresentava comprovação independente desse pagamento.","Os valores e o botão “Sacar” são afirmações exibidas na interface. Não concluímos tarefas, atingimos o mínimo nem solicitamos um saque; portanto, não confirmamos que o usuário receba dinheiro."]},
        {"heading":"O que as regras do próprio app dizem","paragraphs":["O painel Regras da aba Benefícios diz que os bônus diários podem ser usados para desbloquear episódios; se o bônus não for suficiente, moedas são usadas para completar o pagamento. Separadamente, a política de privacidade do DramaStack diz que moedas virtuais não gastas não podem ser convertidas em nenhuma moeda. Isso descreve valor para assistir a conteúdo dentro do app, não dinheiro livre para sacar.","A ficha da Play Store apresenta o DramaStack como entretenimento gratuito com anúncios e menciona recompensas opcionais por anúncios. Ela não explica um programa de saque em dinheiro nem suas condições. Juntas, a tela de saque promocional e as regras escritas não comprovam uma forma confiável de ganhar dinheiro."],"source":{"title":"DramaStack: política de privacidade","url":"https://www.dramastack.video/privacypolicy.html"}},
        {"heading":"Afinal, o DramaStack paga?","paragraphs":["Encontramos uma tela de saque com mínimo de R$ 300, mas não testamos um pagamento. A política escrita diz que moedas virtuais não podem ser convertidas em dinheiro, e as regras do app vinculam os bônus ao desbloqueio de episódios. Pelo que foi possível conferir, não conte o saldo ou as tarefas como renda.","Se você instalar para assistir aos dramas curtos, trate as recompensas como recursos do app sujeitos a condições. Não gaste dinheiro nem muitas horas com base apenas na tela de saque; antes, procure regras atuais e escritas que expliquem elegibilidade, método e comprovante de pagamento."],"source":{"title":"DramaStack na Google Play","url":"https://play.google.com/store/apps/details?id=com.reeltime.dramastack&hl=pt_BR"}}
      ],
      "steps":["Confira se a desenvolvedora na Play Store é HK Reel Time Technology Limited.","Leia o painel Regras, o contrato do usuário e a política de privacidade atuais.","Separe bônus para episódios e moedas virtuais de dinheiro que pode ser sacado.","Antes de fazer tarefas, procure regras escritas sobre elegibilidade e método de saque.","Não trate mensagem de sucesso ou saldo na tela como comprovante de pagamento."],
      "pros":["O app oferece dramas curtos e episódios.","A aba Benefícios mostra condições de tarefas e bônus."],
      "cons":["As regras descrevem bônus e moedas como valor para desbloquear episódios.","A tela mostra um mínimo alto, mas não verificamos um pagamento."],
      "faq":[{"q":"O DramaStack paga dinheiro de verdade?","a":"Não confirmamos um pagamento em dinheiro. A tela de saque mostra mínimo de R$ 300, enquanto a política diz que moedas virtuais não podem ser convertidas em dinheiro."},{"q":"Posso sacar as moedas que ganhar?","a":"A política de privacidade diz que moedas virtuais não gastas não podem ser convertidas em nenhuma moeda. As regras dizem que os bônus são usados para desbloquear episódios."},{"q":"Vocês testaram um saque?","a":"Não. A conta estava sem saldo e não fizemos tarefas, compras nem pedidos de retirada."}],
      "verdict":"Não recomendamos o DramaStack como app de renda. A tela de saque faz uma promessa chamativa, mas as regras escritas descrevem recompensas dentro do app e a política diz que moedas virtuais não viram dinheiro. Não conseguimos confirmar um pagamento.",
      "imageAlt":"Aba Benefícios do DramaStack em português, com tarefas diárias e recompensas",
      "caption":"A aba Benefícios lista tarefas e bônus diários junto de um saldo zerado."
    },
    {
      "id": "compare",
      "app": "compare",
      "category": "guides",
      "slug": "apps-recompensas-dinheiro-pontos-credito",
      "title": "Dinheiro, pontos ou crédito? Como comparar apps de recompensas",
      "description": "Compare Google Opinion Rewards, Microsoft Rewards e Freecash por recompensa, tempo necessário e opções de resgate.",
      "intro": "Dois apps podem anunciar recompensas e entregar coisas muito diferentes. Crédito de Play, pontos de fidelidade e saques sujeitos a ofertas têm usos distintos. Identifique o que você realmente poderá usar antes de comparar os maiores números da tela.",
      "sections": [
        {
          "heading": "Três modelos para decisões diferentes",
          "paragraphs": [
            "O Google Opinion Rewards no Android usa crédito de Play. O Microsoft Rewards oferece pontos para um catálogo associado à conta. O Freecash possui recompensas ligadas a ofertas e condições de saque. Comparar esses modelos por uma única cifra promocional pode confundir.",
            "Pergunte o que você recebe, onde pode usar e quais etapas separam a atividade da recompensa. A disponibilidade depende de plataforma, país e conta. Confira as fontes oficiais em vez de assumir que uma captura em rede social vale para todo mundo."
          ]
        },
        {
          "heading": "Inclua o custo do seu tempo",
          "paragraphs": [
            "Defina quanto tempo dedicaria e se usaria aquela recompensa de outra forma. Inclua compras, verificação e prazos. Uma oferta grande pode ser ruim se exigir gastos que você não faria.",
            "Faça uma conta simples: se uma atividade consome 30 minutos, avalie se a recompensa compensa esse tempo e se você conseguirá usá-la. Compare o valor líquido, depois de taxas ou compras exigidas, com as outras opções disponíveis."
          ]
        }
      ],
      "steps": [
        "Identifique se a recompensa é uma opção de dinheiro, pontos ou crédito de loja.",
        "Consulte os requisitos de país, idade, aparelho e conta.",
        "Leia as condições de saque, resgate e validade.",
        "Calcule o tempo e qualquer compra necessária para participar.",
        "Escolha uma atividade pequena e clara, guardando suas condições."
      ],
      "pros": [
        "Comparar tipos de recompensa evita expectativas equivocadas.",
        "Um limite pessoal de tempo torna a decisão mais prática."
      ],
      "cons": [
        "Catálogos e condições podem mudar.",
        "Não existe um melhor app para todos os países e usuários."
      ],
      "faq": [
        {
          "q": "Qual deles garante renda?",
          "a": "Nenhum deve ser tratado como renda garantida. Disponibilidade, condições e recompensas podem mudar."
        },
        {
          "q": "Qual é a diferença entre crédito e dinheiro?",
          "a": "Crédito de loja serve para compras elegíveis naquele serviço. Dinheiro sacável depende de um método de retirada e pode envolver mínimo, taxas e verificação."
        },
        {
          "q": "Onde verifico as regras?",
          "a": "Na ajuda oficial de cada fornecedor e na oferta vigente que aparece na sua própria conta."
        }
      ],
      "verdict": "Escolha pela utilidade da recompensa e pelo esforço. Um benefício menor que você pode usar pode valer mais do que um valor ao qual não consegue ter acesso.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "No Google Opinion Rewards, a área de tarefas mostra as pesquisas e opções do perfil."
    },
    {
      "id": "swagbucks",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "como-funciona-swagbucks-e-confiavel-paga",
      "title": "Swagbucks: como funciona, quanto valem os pontos SB e se vale a pena",
      "description": "Entenda como funciona o Swagbucks, quanto valem os pontos SB e o que esperar das pesquisas remuneradas, jogos no celular, cashback e saques via PayPal.",
      "intro": "O Swagbucks é uma das plataformas de recompensas e cashback (Get-Paid-To) mais antigas da internet, operada pela Prodege, LLC. Em vez de prometer salário fixo, o site remunera atividades digitais específicas — responder pesquisas de mercado, cumprir metas em jogos de celular e comprar em lojas parceiras — com pontos chamados SB. Saber exatamente quanto valem esses pontos e quais tarefas compensam o seu tempo é essencial antes de começar.",
      "sections": [
        {
          "heading": "O que é o Swagbucks e quanto valem os pontos SB",
          "paragraphs": [
            "Marcas, institutos de pesquisa e estúdios de jogos mobile pagam ao Swagbucks para ouvir consumidores e atrair novos jogadores. Quando você conclui uma tarefa elegível, a plataforma repassa parte dessa comissão em pontos digitais chamados SB. Na conversão padrão da loja de recompensas, 100 SB equivalem a US$ 1,00 (1 dólar), de modo que 500 SB correspondem a um gift card ou resgate de US$ 5 nas regiões compatíveis.",
            "No painel principal que capturamos, as oportunidades aparecem divididas em quatro canais claros: Shop and Earn para cashback em lojas online, Answer Surveys para pesquisas remuneradas, Play Games para jogos de celular e navegador, e Discover para ofertas de serviços parceiros. Como os catálogos dependem dos anunciantes de cada país, usuários nos Estados Unidos, Canadá e Reino Unido costumam ver mais ofertas diárias do que usuários no Brasil ou na América Latina."
          ],
          "source": {
            "title": "Swagbucks: página oficial How It Works",
            "url": "https://www.swagbucks.com/g/how-it-works"
          }
        },
        {
          "heading": "Como se cadastrar pelo convite e configurar a conta",
          "paragraphs": [
            "Você pode criar sua conta gratuita no Swagbucks usando o link oficial de convite abaixo. Cadastre-se com o mesmo endereço de e-mail que você utiliza na sua conta verificada do PayPal caso pretenda sacar em dinheiro depois, e nunca crie múltiplas contas nem utilize VPN, pois os sistemas de segurança da Prodege bloqueiam perfis que mascaram a localização.",
            "Logo após o registro, preencha o questionário inicial de perfil — na nossa captura, o aviso 'Get Started!' oferecia 5 SB em cerca de 5 minutos para liberar novas oportunidades de pesquisas. Quando você indica amigos ou entra por convite, confira sempre as regras vigentes na tela; na oferta capturada, por exemplo, o bônus de indicação exigia que o convidado se cadastrasse e acumulasse pelo menos 300 SB nos primeiros 30 dias."
          ],
          "cta": {
            "label": "Criar conta grátis no Swagbucks pelo link de convite oficial",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Expectativas reais de ganhos: pesquisas, jogos e cashback",
          "paragraphs": [
            "Cada canal de ganho tem uma dinâmica própria. As pesquisas rápidas da nossa captura pagavam entre 5 SB (5 minutos) e 25 SB (20 minutos), sendo uma opção sem custo financeiro, embora as perguntas de triagem possam desqualificar seu perfil se você não fizer parte do público-alvo procurado pela marca.",
            "Já as ofertas de jogos no celular anunciam tetos mais altos — como até 919 SB no Farm Craze ou até 2.373 SB no Puzzles & Chaos: Frozen Castle —, mas exigem atingir níveis elevados dentro de 30 dias e seguir à risca o rastreamento do aplicativo. Encare o Swagbucks como uma forma de fazer renda extra moderada no tempo livre, e não como substituto de uma renda mensal fixa."
          ],
          "source": {
            "title": "Swagbucks: catálogo da Rewards Store",
            "url": "https://www.swagbucks.com/rewards-store"
          }
        }
      ],
      "steps": [
        "Acesse o Swagbucks pelo link oficial de cadastro e crie sua conta usando seu e-mail principal.",
        "Confirme seu e-mail e conclua o perfil inicial de 5 minutos para destravar pesquisas compatíveis com você.",
        "Navegue pelas abas Shop and Earn, Answer Surveys e Play Games para comparar o tempo exigido a cada 100 SB (US$ 1).",
        "Leia as instruções de rastreamento, o prazo em dias e o tempo pendente antes de iniciar qualquer jogo ou oferta.",
        "Resgate seus pontos SB acumulados na Rewards Store por gift cards digitais ou saldo no PayPal verificado."
      ],
      "pros": [
        "Paridade clara de 100 SB = US$ 1,00 nos resgates de gift cards e PayPal.",
        "Reúne pesquisas pagas, metas em jogos mobile e cashback de compras em um único painel."
      ],
      "cons": [
        "Desqualificações em pesquisas e diferenças regionais de catálogo limitam o ganho por hora.",
        "Pontos de jogos e ofertas costumam ficar pendentes por vários dias antes da liberação para saque."
      ],
      "faq": [
        {
          "q": "O Swagbucks é confiável e gratuito?",
          "a": "Sim. O Swagbucks é operado pela Prodege, LLC e o cadastro é totalmente gratuito. Algumas metas opcionais de jogos ou ofertas incluem compras, mas você não precisa pagar para participar."
        },
        {
          "q": "Quanto valem 1.000 pontos SB em dólares?",
          "a": "Na cotação padrão de 100 SB para cada US$ 1,00, 1.000 SB equivalem a US$ 10,00 para resgate na loja de recompensas."
        },
        {
          "q": "Posso usar VPN para ter mais ofertas no Swagbucks?",
          "a": "Não. O uso de VPN, proxy ou localização falsa viola os termos da Prodege e costuma resultar no bloqueio da conta durante a análise do saque."
        }
      ],
      "verdict": "O Swagbucks é uma plataforma legítima e tradicional para acumular gift cards ou dinheiro extra no PayPal quando você combina cashback em compras planejadas com metas realistas em jogos e pesquisas curtas.",
      "imageAlt": "Painel do Swagbucks mostrando cashback no Shop and Earn e pesquisas no Answer Surveys",
      "caption": "O painel do Swagbucks exibe percentuais de cashback em lojas (como Walmart, eBay e Best Buy) ao lado de pesquisas por tempo.",
      "imageKey": "swagbucks-shop",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-games",
        "alt": "Catálogo Play Games and Earn do Swagbucks no Android com recompensas em SB",
        "caption": "A seção Play Games and Earn lista jogos de Android com recompensas máximas que vão de 26 SB a 2.373 SB.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-games",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "jogos-swagbucks-como-ganhar-rastreamento",
      "title": "Jogos do Swagbucks: como funcionam as metas por nível, QR Code e rastreamento no celular",
      "description": "Veja como ganhar pontos SB jogando no Android com exemplos reais do Swagbucks como Farm Craze (919 SB), metas de 30 dias e regras de rastreamento do aplicativo.",
      "intro": "Os jogos de celular estão entre as tarefas que mais pagam pontos no Swagbucks porque não sofrem com a desqualificação no meio do caminho comum nas pesquisas. Porém, o valor anunciado no card de cada jogo é a soma máxima dividida em várias etapas — e receber cada ponto depende de manter o rastreamento do aplicativo ativo desde o momento em que você escaneia o QR Code.",
      "sections": [
        {
          "heading": "Entendendo o catálogo Play Games: valor total versus metas por nível",
          "paragraphs": [
            "Na tela de Android que capturamos, o Swagbucks listava títulos casuais, de quebra-cabeça e de estratégia com diferentes tetos: Puzzles & Chaos: Frozen Castle (até 2.373 SB), Screw Out (até 1.233 SB), Merge Restaurant (até 1.100 SB), Farm Craze (até 919 SB), Box Away (até 618 SB), Viking Rise (até 596 SB) e Wood Block Jam (até 560 SB).",
            "A expressão 'Earn up to' (ganhe até) merece atenção: você não recebe o valor cheio só por instalar o jogo. Ao abrir os detalhes de Farm Craze (até 919 SB no Android), a barra Goal Progress divide o prêmio em metas progressivas: instalar o app, uma meta opcional de fazer qualquer compra (+52 SB), alcançar o Nível 30 (+1 SB), alcançar o Nível 40 (+4 SB) e níveis superiores até chegar ao Nível 2000 dentro de 30 dias."
          ],
          "source": {
            "title": "Swagbucks: seção oficial de jogos",
            "url": "https://www.swagbucks.com/games"
          }
        },
        {
          "heading": "Como instalar pelo QR Code ou link sem perder o rastreamento",
          "paragraphs": [
            "Quando você abre a oferta de um jogo no computador, o Swagbucks exibe um QR Code ('Scan to Install') e opções para enviar o link de instalação por SMS ou e-mail para o seu celular. Sempre inicie o download diretamente por esse link oficial no aparelho Android ou iOS escolhido — e somente se você nunca tiver instalado aquele jogo antes no aparelho ou na sua conta da loja de aplicativos.",
            "Você pode criar sua conta ou entrar pelo link oficial de convite abaixo para conferir a lista atual de jogos para o seu celular. Antes de jogar por horas, desative VPNs, bloqueadores de anúncios e recursos de retransmissão privada, aceite as permissões de rastreamento ao abrir o jogo pela primeira vez e confirme no seu histórico (Activity Ledger > Visited) que o clique foi registrado."
          ],
          "cta": {
            "label": "Acessar o Swagbucks pelo convite para ver ofertas de jogos",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Prazo de 30 dias, compras no app e espera de 5 dias pendentes",
          "paragraphs": [
            "Na nossa captura de Farm Craze, o quadro 'Important Things to Know' trazia três regras essenciais: chegar ao nível máximo em até 30 dias após a instalação, seguir os passos de rastreamento do aplicativo ('Para ser recompensado pela sua jogabilidade, siga os passos de rastreamento do aplicativo aqui') e observar que o prêmio fica pendente por 5 dias ('Award will pend for 5 days'). Isso significa que, após bater uma meta, os pontos SB aguardam 5 dias antes de entrar no saldo liberado para saque.",
            "Confira a barra Goal Progress logo após atingir a primeira meta curta (como o Nível 30). Se o primeiro nível não aparecer como pendente, pare de jogar antes de gastar dezenas de horas nos níveis altos. Avalie também se metas opcionais de compra (como +52 SB, ou US$ 0,52, por fazer uma compra) custam mais caro do que os pontos devolvidos."
          ],
          "source": {
            "title": "Prodege: termos de uso e elegibilidade de ofertas",
            "url": "https://www.prodege.com/terms-of-use/"
          }
        }
      ],
      "steps": [
        "Filtre a seção Play Games pelo sistema do seu celular (Android ou iOS) para ver apenas ofertas compatíveis.",
        "Abra a ficha do jogo e leia todas as etapas da barra Goal Progress junto com o prazo em dias.",
        "Escaneie o QR Code do Swagbucks ou abra o link enviado por e-mail/SMS em um celular onde o jogo nunca foi instalado.",
        "Permita o rastreamento do aplicativo ao abrir o jogo pela primeira vez e mantenha VPNs e bloqueadores de anúncio desligados.",
        "Confirme se a instalação e a primeira meta inicial aparecem no Goal Progress antes de dedicar horas às fases avançadas."
      ],
      "pros": [
        "A barra Goal Progress mostra claramente quantos SB cada nível paga e o prazo de 30 dias.",
        "Potencial de ganho maior do que pesquisas curtas para quem gosta de jogos de puzzle ou estratégia."
      ],
      "cons": [
        "As metas finais (como atingir o Nível 2000 em 30 dias) exigem bastante tempo diário de tela.",
        "O rastreamento falha se o jogo já tiver sido instalado antes no aparelho ou se a permissão for negada."
      ],
      "faq": [
        {
          "q": "Por que o nível que completei no jogo do Swagbucks não ficou pendente?",
          "a": "O rastreamento costuma falhar quando você já instalou o jogo anteriormente, usou VPN ou bloqueador de anúncios, negou a permissão de rastreamento ou trocou de aparelho."
        },
        {
          "q": "Preciso chegar até o último nível para ganhar alguma coisa?",
          "a": "Não. Em ofertas com múltiplas metas como Farm Craze, cada etapa concluída (como Nível 30 e Nível 40) credita seus próprios pontos SB mesmo que você pare antes do nível final."
        },
        {
          "q": "O que significa 'Award will pend for 5 days'?",
          "a": "Significa que, depois que o Swagbucks registra a meta concluída no jogo, os pontos SB ficam 5 dias na fila de pendentes para validação do anunciante antes de ficarem disponíveis para resgate."
        }
      ],
      "verdict": "Os jogos do Swagbucks valem a pena quando você foca nas metas intermediárias realistas e confirma que o rastreamento funcionou logo no primeiro nível.",
      "imageAlt": "Catálogo de jogos Android no Swagbucks mostrando Screw Out, Farm Craze e Puzzles & Chaos",
      "caption": "O catálogo de jogos para Android exibe o teto de pontos SB em jogos casuais, de puzzle e de estratégia.",
      "imageKey": "swagbucks-games",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-offer",
        "alt": "Detalhes da oferta Farm Craze no Swagbucks com QR Code, regras de rastreamento e metas de 30 dias",
        "caption": "Por dentro da oferta Farm Craze: instalação via QR Code, prazo de 30 dias, aviso de rastreamento em português e 5 dias pendentes.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-surveys",
      "app": "swagbucks",
      "category": "rewards",
      "slug": "pesquisas-remuneradas-e-cashback-swagbucks",
      "title": "Pesquisas remuneradas e cashback no Swagbucks: como acumular pontos SB no dia a dia",
      "description": "Guia prático sobre as pesquisas do Swagbucks e o cashback do Shop and Earn em lojas como Walmart e eBay, explicando por que ocorrem desqualificações de perfil.",
      "intro": "Nem todo mundo quer passar 30 dias subindo de nível em jogos de celular. Para quem prefere tarefas rápidas no navegador ou quer receber parte do dinheiro de volta em compras online que já faria, o Swagbucks oferece dois canais diretos: Answer Surveys e o portal de cashback Shop and Earn.",
      "sections": [
        {
          "heading": "Como funcionam as pesquisas no Answer Surveys e por que há desqualificações",
          "paragraphs": [
            "No painel do Swagbucks que capturamos, a faixa Answer Surveys and Earn listava cada questionário com seu tempo estimado e recompensa: 5 SB por 5 minutos (Survey #201976545), 10 SB por 5 minutos e 25 SB por 20 minutos, além do cartão inicial 'Get Started! Earn 5 SB in about 5 minutes'.",
            "Toda pesquisa de mercado busca um perfil específico de consumidor. As primeiras perguntas funcionam como uma triagem demográfica; se suas respostas não combinarem com a cota procurada pela empresa, a pesquisa é encerrada antes do fim. Responda sempre com atenção e consistência, pois marcar opções aleatórias ou contraditórias pode suspender seu acesso ao canal de pesquisas."
          ],
          "source": {
            "title": "Swagbucks: visão geral de pesquisas remuneradas",
            "url": "https://www.swagbucks.com/g/paid-surveys"
          }
        },
        {
          "heading": "Shop and Earn: transformando compras online planejadas em pontos SB",
          "paragraphs": [
            "A seção Shop and Earn funciona como um portal de cashback em que lojas parceiras pagam comissão ao Swagbucks e você recebe uma porcentagem da compra de volta em pontos SB por dólar gasto. Na tela que capturamos, apareciam taxas como Walmart (até 8% de cashback, ou 8 SB por US$ 1), eBay (até 5%), Best Buy (até 6%), Kohl's (4%), Expedia (até 12%), Hotels.com (até 12%) e QVC, HSN e The Home Depot (até 15%, ou 15 SB por US$ 1).",
            "Você pode criar sua conta gratuita pelo link oficial de convite abaixo para verificar quais lojas e pesquisas estão disponíveis na sua região. Para garantir que o cashback seja rastreado corretamente, acesse a loja a partir do Swagbucks com o carrinho vazio e não ative extensões concorrentes de cuponagem na hora de fechar o pedido."
          ],
          "cta": {
            "label": "Cadastre-se grátis no Swagbucks para acessar pesquisas e cashback",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Regras práticas para proteger seu tempo e seu orçamento",
          "paragraphs": [
            "Nas pesquisas, observe a proporção entre pontos SB e minutos. Uma pesquisa de 5 minutos que paga 10 SB rende mais por minuto do que uma de 20 minutos que paga 25 SB, além de reduzir a perda de tempo caso o filtro inicial não aprove seu perfil.",
            "No Shop and Earn, use o cashback exclusivamente como desconto em compras que você já havia planejado. Comprar um item apenas para ganhar 15% em pontos SB significa gastar os outros 85% do próprio bolso; compare sempre o preço final da loja antes de concluir a compra."
          ],
          "source": {
            "title": "Swagbucks: diretório de lojas Shop and Earn",
            "url": "https://www.swagbucks.com/shop"
          }
        }
      ],
      "steps": [
        "Crie sua conta gratuita no Swagbucks e preencha o perfil inicial de 5 minutos em Answer Surveys.",
        "Dê preferência às pesquisas curtas de 5 a 10 minutos com boa relação entre pontos SB e tempo.",
        "Antes de comprar em lojas parceiras como eBay, Walmart ou Expedia, busque a loja dentro do Shop and Earn.",
        "Confira as regras de categorias elegíveis e desative extensões externas de cupons antes de abrir o link da loja.",
        "Verifique no seu Activity Ledger se a visita à loja ou a pesquisa concluída foi registrada corretamente."
      ],
      "pros": [
        "As pesquisas não exigem nenhum gasto e informam a duração estimada antes do clique.",
        "O portal Shop and Earn devolve de 1% a 15% (1 a 15 SB por dólar) em grandes varejistas internacionais."
      ],
      "cons": [
        "A triagem de perfil frequentemente encerra pesquisas quando a cota demográfica já foi preenchida.",
        "Pontos de cashback costumam ficar pendentes até o fim do prazo de devolução da loja."
      ],
      "faq": [
        {
          "q": "Por que sou desqualificado de algumas pesquisas no Swagbucks?",
          "a": "Os institutos de pesquisa fecham o questionário quando a cota para sua faixa etária, região ou hábito de consumo já atingiu o limite ou quando buscam um público específico."
        },
        {
          "q": "O que significa ganhar até 15 SB por US$ 1 no Shop and Earn?",
          "a": "Cada 1% de cashback equivale a 1 ponto SB para cada dólar gasto (antes de impostos e frete) nos produtos elegíveis daquela loja parceira."
        },
        {
          "q": "Posso usar outra extensão de cashback junto com o Swagbucks?",
          "a": "Não. Ativar outra extensão de navegador no checkout costuma sobrescrever o cookie de afiliado do Swagbucks e cancelar seus pontos SB."
        }
      ],
      "verdict": "Use o Answer Surveys para somar pontos rápidos sem gastar nada nos intervalos do dia e ative o Shop and Earn apenas quando for realizar compras que já estavam no seu orçamento.",
      "imageAlt": "Lojas com cashback no Shop and Earn e lista de pesquisas do Swagbucks",
      "caption": "O Shop and Earn mostra a porcentagem de cashback e os pontos SB por dólar logo acima da fila de pesquisas.",
      "imageKey": "swagbucks-shop",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-goals",
        "alt": "Painel de regras da oferta e condições de indicação no Swagbucks",
        "caption": "O painel de cada oferta explica o rastreamento obrigatório, os dias pendentes e as regras de indicação.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-cashout",
      "app": "swagbucks",
      "category": "guides",
      "slug": "como-sacar-no-swagbucks-paypal-gift-cards",
      "title": "Como sacar no Swagbucks: regras do PayPal, gift cards e pontos SB pendentes",
      "description": "Saiba por que os pontos SB ficam pendentes antes da liberação, como converter seu saldo em dinheiro no PayPal ou vale-presente e quais verificações são exigidas.",
      "intro": "Acumular pontos SB é apenas metade do caminho no Swagbucks; transformar esses pontos em dinheiro no PayPal ou em um vale-presente exige passar por duas etapas: aguardar a liberação dos pontos pendentes e cumprir os requisitos de verificação na Rewards Store. Entender como funcionam esses prazos evita surpresas no seu primeiro resgate.",
      "sections": [
        {
          "heading": "Pontos SB pendentes versus saldo disponível: por que existe espera",
          "paragraphs": [
            "Quando você atinge uma meta em um jogo mobile, conclui um cadastro no Discover ou faz uma compra com cashback, os pontos raramente ficam livres para saque na mesma hora. Na oferta de Farm Craze que capturamos, as regras informam de forma direta: 'Award will pend for 5 days' (a recompensa ficará pendente por 5 dias). Durante esse período, os SB aparecem no seu Activity Ledger com a data de liberação enquanto o anunciante confirma a atividade.",
            "Você só pode resgatar os pontos SB que já cumpriram o prazo pendente e entraram no seu saldo disponível. Pesquisas curtas costumam ser creditadas na hora, enquanto metas de jogos, ofertas como Coinbase e cashback em lojas têm prazos pendentes que variam de 5 a mais de 30 dias conforme o parceiro."
          ],
          "source": {
            "title": "Swagbucks: opções de resgate na Rewards Store",
            "url": "https://www.swagbucks.com/rewards-store"
          }
        },
        {
          "heading": "Dinheiro no PayPal ou gift cards digitais: alinhe seus dados cadastrais",
          "paragraphs": [
            "Na loja de recompensas do Swagbucks, a base de conversão é 100 SB = US$ 1,00. Os gift cards digitais (como Amazon, Walmart ou Target nas regiões elegíveis) costumam ter valores mínimos iniciais baixos — muitas vezes a partir de 300 a 500 SB — e ocasionalmente oferecem desconto mensal no primeiro vale de determinada faixa.",
            "Se você prefere receber via PayPal, o endereço de e-mail da sua conta no Swagbucks precisa ser exatamente o mesmo e-mail da sua conta verificada do PayPal, assim como seu nome e sobrenome. Cadastre-se pelo link oficial abaixo já utilizando o mesmo e-mail do seu PayPal para evitar divergências na hora de solicitar o pagamento."
          ],
          "cta": {
            "label": "Cadastrar no Swagbucks usando o mesmo e-mail do seu PayPal",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Verificação do primeiro resgate e prazo de pagamento",
          "paragraphs": [
            "Ao confirmar um pedido de resgate, o Swagbucks exige uma validação de segurança — geralmente por meio de um código SMS enviado para um número de celular real (números virtuais VoIP não são aceitos) ou pela sua pergunta de segurança. No primeiro saque ou em valores maiores, a plataforma também pode solicitar uma verificação única de documento de identidade.",
            "Depois que o pedido é confirmado, o envio não é imediato: tanto transferências para o PayPal quanto gift cards digitais costumam levar de 2 a 5 dias úteis (podendo chegar a 10 dias úteis em análises específicas). Você pode acompanhar o status de cada pedido na área My Rewards da sua conta."
          ],
          "source": {
            "title": "Prodege: termos de uso e políticas de resgate",
            "url": "https://www.prodege.com/terms-of-use/"
          }
        }
      ],
      "steps": [
        "Abra o seu Activity Ledger para conferir em que data seus pontos SB pendentes serão liberados no saldo total.",
        "Confirme se o seu e-mail de login e nome completo no Swagbucks são idênticos aos da sua conta verificada do PayPal.",
        "Acesse a Rewards Store e escolha o gift card digital ou valor do PayPal compatível com o seu saldo disponível.",
        "Conclua a confirmação por SMS no celular ou a etapa de segurança solicitada na tela.",
        "Acompanhe o pedido em My Rewards e aguarde o prazo de 2 a 5 dias úteis para o recebimento."
      ],
      "pros": [
        "Oferece escolha entre dinheiro no PayPal e vales-presente de grandes redes nas regiões atendidas.",
        "O Activity Ledger informa com transparência o prazo pendente (como 5 dias nos jogos mobile)."
      ],
      "cons": [
        "Pontos com status Pending não podem ser sacados antes do término da contagem regressiva.",
        "Exige mesmo e-mail do PayPal, número de celular real (não VoIP) e de 2 a 5 dias úteis de processamento."
      ],
      "faq": [
        {
          "q": "Por que não consigo sacar meus pontos SB pendentes na hora?",
          "a": "Os pontos pendentes ficam retidos por um prazo definido — como os 5 dias informados na oferta do jogo Farm Craze — para que o parceiro valide a conclusão antes de liberar o saldo."
        },
        {
          "q": "O e-mail do PayPal precisa ser igual ao e-mail do Swagbucks?",
          "a": "Sim. Para receber via PayPal, o Swagbucks exige que o e-mail da conta seja exatamente o mesmo de uma conta PayPal verificada e ativa."
        },
        {
          "q": "Quanto tempo o Swagbucks demora para pagar no PayPal?",
          "a": "Após a confirmação do pedido, a maioria dos resgates via PayPal e vales-presente digitais é processada entre 2 e 5 dias úteis."
        }
      ],
      "verdict": "Crie sua conta no Swagbucks desde o início com o mesmo e-mail do seu PayPal verificado e mantenha um número de celular real para confirmação por SMS assim que seus pontos pendentes forem liberados.",
      "imageAlt": "Painel de oferta do Swagbucks mostrando aviso Award will pend for 5 days e Goal Progress",
      "caption": "Os termos da oferta indicam o prazo exato de retenção ('Award will pend for 5 days') logo acima do progresso das metas.",
      "imageKey": "swagbucks-goals",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-offer",
        "alt": "Janela completa da oferta Farm Craze no Swagbucks com QR Code e regras de níveis",
        "caption": "Conferir a janela completa da oferta antes de instalar ajuda a ver o prazo pendente, o sistema exigido e o limite de 30 dias.",
        "wide": true
      }
    },
    {
      "id": "swagbucks-vs-freecash",
      "app": "swagbucks",
      "category": "guides",
      "slug": "swagbucks-ou-freecash-comparativo-sites-recompensas",
      "title": "Swagbucks ou Freecash: qual site de recompensas e renda extra vale mais a pena?",
      "description": "Compare o Swagbucks e o Freecash em ofertas de jogos de celular, pesquisas remuneradas, cashback em compras, prazos pendentes e regras de saque.",
      "intro": "Swagbucks e Freecash estão entre os sites Get-Paid-To (GPT) mais buscados por quem procura ganhar dinheiro extra pela internet. Ambos remuneram testes de jogos no celular, ofertas de parceiros e pesquisas, mas têm diferenças importantes em cashback de compras online, valor mínimo do primeiro saque e disponibilidade regional.",
      "sections": [
        {
          "heading": "Onde o Swagbucks se diferencia: portal de cashback além de jogos e pesquisas",
          "paragraphs": [
            "O Freecash concentra seu catálogo em metas de jogos mobile, muros de ofertas e pesquisas. O Swagbucks cobre essas mesmas frentes — nossa captura no Android mostrou jogos como Puzzles & Chaos (até 2.373 SB) e Screw Out (até 1.233 SB), além da Coinbase na aba Discover —, mas acrescenta um portal próprio de cashback (Shop and Earn) com varejistas como Walmart (até 8%), eBay (até 5%) e The Home Depot (até 15%).",
            "Para quem já faz compras online em lojas parceiras ou prefere começar com tarefas rápidas como pesquisas de 5 minutos (de 5 a 10 SB), o Swagbucks oferece mais caminhos para somar pontos quando a lista de jogos está parada."
          ],
          "source": {
            "title": "Swagbucks: funcionamento e canais de ganho",
            "url": "https://www.swagbucks.com/g/how-it-works"
          }
        },
        {
          "heading": "Comparando metas de jogos mobile, rastreamento e convites",
          "paragraphs": [
            "Nas duas plataformas, os jogos de maior valor dividem a recompensa total em níveis progressivos com prazo de 30 dias e período pendente (como os 5 dias pendentes exibidos na oferta de Farm Craze no Swagbucks). Como cada oferta de jogo vale apenas para novos usuários que instalam o app pela primeira vez no aparelho, muitos usuários mantêm conta nos dois sites e comparam qual plataforma paga melhor por determinado jogo antes de baixá-lo.",
            "Você pode abrir sua conta no Swagbucks pelo link oficial de convite abaixo e comparar o catálogo ativo de jogos com o do Freecash antes de escolher sua próxima oferta."
          ],
          "cta": {
            "label": "Abrir conta no Swagbucks pelo convite oficial para comparar ofertas",
            "url": "https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&rp=1",
            "sponsored": true
          }
        },
        {
          "heading": "Limites de saque, verificação e métodos de recebimento",
          "paragraphs": [
            "Como detalhamos no guia do Freecash, a central de ajuda do serviço informa um mínimo inicial de US$ 25 no primeiro saque (variável por região), além de verificação de e-mail e identidade, com opções de retirada em criptomoedas, transferência bancária e gift cards. Já o Swagbucks converte 100 SB em US$ 1,00 e permite resgatar gift cards digitais e dinheiro via PayPal com valores iniciais menores em diversos mercados, desde que seu e-mail coincida com o do PayPal verificado e você confirme o pedido por SMS.",
            "Nenhuma das duas plataformas substitui um trabalho formal, e ambas proíbem o uso de VPN ou contas duplicadas. Consulte o catálogo real disponível no seu país em cada painel antes de dedicar horas a uma meta longa."
          ],
          "source": {
            "title": "Freecash: requisitos do primeiro saque",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        }
      ],
      "steps": [
        "Crie suas contas no Swagbucks e no Freecash usando sua localização real e seu e-mail principal.",
        "Antes de instalar um jogo no celular, pesquise o título nas duas plataformas para comparar o valor total, os níveis exigidos e os dias pendentes.",
        "Use a aba Shop and Earn do Swagbucks quando for fazer compras online planejadas em lojas parceiras.",
        "Instale cada jogo escolhido somente pelo link da plataforma selecionada, mantendo o rastreamento do aplicativo ativo.",
        "Acompanhe os prazos pendentes e o valor mínimo de retirada em cada painel para planejar seus resgates."
      ],
      "pros": [
        "O Swagbucks adiciona de 1% a 15% de cashback em lojas e gift cards acessíveis ao lado dos jogos e pesquisas.",
        "Comparar os dois catálogos permite escolher a melhor tabela de metas antes de instalar um jogo novo."
      ],
      "cons": [
        "Não é permitido concluir a mesma oferta de novo usuário de um jogo nas duas plataformas usando o mesmo celular.",
        "A disponibilidade de ofertas e métodos de pagamento varia bastante conforme o país nos dois sites."
      ],
      "faq": [
        {
          "q": "Posso usar o Swagbucks e o Freecash ao mesmo tempo?",
          "a": "Sim, você pode ter conta nos dois sites, mas cada oferta de instalação de jogo para novos usuários só pode ser concluída em uma plataforma por aparelho e conta da loja."
        },
        {
          "q": "Qual é melhor para ganhar cashback em compras online?",
          "a": "O Swagbucks possui o portal integrado Shop and Earn com lojas como Walmart, eBay, Best Buy e Expedia, enquanto o Freecash foca em jogos e muros de ofertas."
        },
        {
          "q": "Como comparar o valor dos pontos em cada site?",
          "a": "No Swagbucks, 100 SB equivalem a US$ 1,00. No Freecash, 1.000 moedas equivalem a US$ 1,00. Compare sempre o valor equivalente em dólar e o esforço exigido nos níveis."
        }
      ],
      "verdict": "Escolha o Swagbucks se você busca um painel completo que reúna cashback em compras, pesquisas e saques via PayPal ou gift cards. Mantenha conta nos dois serviços se você gosta de jogos mobile e quer comparar qual paga melhor antes de instalar um novo título.",
      "imageAlt": "Ofertas de jogos mobile e seção Discover do Swagbucks no Android",
      "caption": "O Swagbucks lista metas de jogos no Android ao lado de ofertas do Discover como a Coinbase.",
      "imageKey": "swagbucks-games",
      "imageWide": true,
      "secondImage": {
        "key": "swagbucks-shop",
        "alt": "Portal de cashback Shop and Earn e pesquisas no Swagbucks",
        "caption": "Diferente de sites focados apenas em offerwalls, o Swagbucks traz um portal de cashback que devolve até 15 SB por dólar em lojas parceiras.",
        "wide": true
      }
    }
  ]
};
export const apps:Record<string,{name:string;url:string;os:string;sources:{title:string;url:string}[]}>= {
  "lens": {
    "name": "Google Lens",
    "url": "https://lens.google/",
    "os": "Android, iOS",
    "sources": [
      {
        "title": "Google: search what you see with Lens",
        "url": "https://blog.google/products-and-platforms/products/search/google-lens-tips-2025/"
      },
      {
        "title": "Google Lens & Circle to Search",
        "url": "https://www.android.com/intl/en_in/articles/google-lens-and-circle-to-search/"
      },
      {
        "title": "Google: visual search and text selection",
        "url": "https://support.google.com/websearch/answer/14516623"
      }
    ]
  },
  "opinion": {
    "name": "Google Opinion Rewards",
    "url": "https://surveys.google.com/google-opinion-rewards/",
    "os": "Android, iOS",
    "sources": [
      {
        "title": "Google: redeem rewards on Android",
        "url": "https://support.google.com/opinionrewards/answer/6322284?hl=en"
      },
      {
        "title": "Google: availability and eligibility on Android",
        "url": "https://support.google.com/opinionrewards/answer/6322274?hl=en"
      },
      {
        "title": "Google: iOS availability",
        "url": "https://support.google.com/opinionrewards/answer/7386064?hl=en"
      }
    ]
  },
  "microsoft": {
    "name": "Microsoft Rewards",
    "url": "https://rewards.microsoft.com/",
    "os": "Web, Android, iOS",
    "sources": [
      {
        "title": "Microsoft: how to earn Rewards points",
        "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/how-to-earn-microsoft-rewards-points"
      },
      {
        "title": "Microsoft: how to redeem points",
        "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/how-to-redeem-microsoft-rewards-points"
      },
      {
        "title": "Microsoft: supported regions",
        "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/microsoft-rewards-regions"
      },
      {
        "title": "Microsoft: track Rewards orders",
        "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/track-my-microsoft-rewards-orders"
      }
    ]
  },
  "freecash": {
    "name": "Freecash",
    "url": "https://freecash.com/",
    "os": "Web, Android",
    "sources": [
      {
        "title": "Freecash: first-withdrawal requirements",
        "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
      },
      {
        "title": "Freecash: withdrawal processing times",
        "url": "https://freecash.com/academy/en/support/withdrawal/issues/why-withdrawal-pending"
      },
      {
        "title": "Freecash: affiliate system, requirements and regions",
        "url": "https://freecash.com/academy/en/support/account/rewards/how-affiliate-system-works"
      },
      {
        "title": "Freecash: affiliate program policy",
        "url": "https://freecash.com/policies/affiliate-policy"
      }
    ]
  },
  "dramastack": {
    "name": "DramaStack",
    "url": "https://play.google.com/store/apps/details?id=com.reeltime.dramastack&hl=pt_BR",
    "os": "Android",
    "sources": [
      {"title":"DramaStack on Google Play","url":"https://play.google.com/store/apps/details?id=com.reeltime.dramastack&hl=en"},
      {"title":"DramaStack: privacy policy","url":"https://www.dramastack.video/privacypolicy.html"},
      {"title":"DramaStack: user agreement","url":"https://www.dramastack.video/useragreement.html"}
    ]
  },
  "swagbucks": {
    "name": "Swagbucks",
    "url": "https://www.swagbucks.com/",
    "os": "Web, Android, iOS",
    "sources": [
      {"title":"Swagbucks: How It Works","url":"https://www.swagbucks.com/g/how-it-works"},
      {"title":"Swagbucks: Play Games","url":"https://www.swagbucks.com/games"},
      {"title":"Swagbucks: Paid Online Surveys","url":"https://www.swagbucks.com/g/paid-surveys"},
      {"title":"Swagbucks: Shop and Earn Cashback","url":"https://www.swagbucks.com/shop"},
      {"title":"Swagbucks: Rewards Store","url":"https://www.swagbucks.com/rewards-store"},
      {"title":"Prodege: Terms of Use","url":"https://www.prodege.com/terms-of-use/"}
    ]
  }
};
export const sourcesFor=(article:Article)=>article.id==='compare'?[...apps.opinion.sources.slice(0,1),...apps.microsoft.sources.slice(0,1),...apps.freecash.sources.slice(0,1),...apps.swagbucks.sources.slice(0,1)]:article.id==='swagbucks-vs-freecash'?[...apps.swagbucks.sources.slice(0,3),...apps.freecash.sources.slice(0,2)]:apps[article.app].sources;
