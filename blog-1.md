# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.


##  Why `any` is a "Type Safety Hole"

`any` কে type safety hole বলা হয় কারণ এটা ব্যবহার করলে TypeScript কোনো type checking করে না। ফলে ভুল type হলেও error দেখায় না এবং unsafe code রান করতে পারে।

##  Why unknown is Safer

`unknown` safer কারণ এটা ব্যবহার করার আগে অবশ্যই type check করতে হয়। সরাসরি ব্যবহার করা যায় না, তাই ভুল হওয়ার chance কমে যায়।

## Type Narrowing কী?

Type narrowing হলো এমন একটি process যেখানে TypeScript কোনো variable যার একাধিক type থাকতে পারে (যেমন string বা number), তাকে condition ব্যবহার করে নির্দিষ্ট একটাই type হিসেবে ব্যবহার করতে দেয়।