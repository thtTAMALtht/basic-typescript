# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself)


TypeScript এ `Pick` এবং `Omit` ব্যবহার করে বড় interface থেকে দরকারি অংশ নিয়ে নতুন type তৈরি করা যায়, ফলে একই property বারবার লিখতে হয় না।

`Pick` দিয়ে নির্দিষ্ট property নেওয়া যায়, আর `Omit` দিয়ে অপ্রয়োজনীয় property বাদ দেওয়া যায়। এতে করে master interface থেকে ছোট ছোট “slices” তৈরি করা যায়।

👉 এর ফলে code পুনরায় লেখা লাগে না, code clean থাকে এবং DRY (Don't Repeat Yourself) principle follow হয়।