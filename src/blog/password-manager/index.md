---
title: Use a password manager, please!
date: "2018-01-24T09:00:00.000Z"
---

*Reflections on my move to using a password manager.*

## Securing your own accounts

In 2018, I think most understand the importance of securing your personal accounts, do I have to say more than Equifax, Yahoo, and Uber (3 big hacks of 2017). If you are like most people, you use the same password for every account, maybe you even add `!` or `123` to the end of your usual password. I took measures to be more secure making a password algorithm for all my accounts.

I would make rules for every account, such as the even indexed letters of the site name (starting at 1), every vowel in my account name and a base that was the same across. For example, site: `Facebook`, account: `steve_louie` with base: `32!?..` would reault in the password `aeokeeouie32!?..`. I would set it up to make unique passwords for each account. This has worked for me for the last 5+ years, I changed *all* my passwords every 6 months to once a year.

### Pros and Cons of the Password Algorithm
This method works because it should make unique passwords for every site. It doesn't require you to write anything down and there is nothing stored anywhere online about how you came up with this method (encrypted or not). The rules should be relatively easy to remember.

Using a password algorithm is still systematic. If multiple accounts of yours were compromised it may be possible to reverse engineer your algorithm, uncovering all of your passwords. This method can be a burden, some sites have oddly specific password rules when it comes to numbers and special characters allowed. Sites like these, defeat the purpose because you end up having exceptions to the algorithm to compensate for weird rules. Lastly, generating rules that make unique passwords, that are an appropriate length, appear random and contain numbers, letters and special characters could be hard.

### Should you use a password manager?
Absolutely!

### Why did it take me so long to move?
I thought it was very complicated. It is not! Quite frankly, it would be worth complexity given how convenient it is.

### Why?
In a world where it was "just as secure" as your current method for passwords, it is worth it on the convenience alone. In actuality, using any password manager is probably more secure than your current method. It helps you generate secure passwords that are random, making it better than the algorithm method. A password manager should be accessible from all devices, benefitting every device you own. You now have to remember one "super" password, instead of complex rules or numerous passwords.

### My Considerations
#### To pay or not to pay?
I didn't want to pay, as I saw free options that were reasonable. It probably comes at the cost of more work on your part.

#### Where is your encrypted password file stored? Is it on someone else's servers? Do you control distribution of your encrypted password file?
This was the most critical consideration for me. I did not want to implicitly trust a company to store / backup this very important information. This burden to self manage is not for everyone and that's okay.

#### UX? Is it a modern app with a beautiful interface?
I wanted something usable. I did not need a modern app.

#### Autofill? Will the password manager be able to identify a site and enter the proper credentials?
This is a nice to have, but not critical for me. It means there is another process accessing your passwords and transferring them to your browser, which I wanted to avoid, especially if that transfer was being made over the internet.

#### Multi-device access?
I have multiple computers, a phone and a tablet. I needed all devices supported including OSX, Windows, Linux, iOS, and Android.

#### Shared passwords?
I don't need it this second, but wanted to ability to do it.

### I picked [KeePassXC](https://keepassxc.org/)
KeePassXC met my considerations described above. It's not the most beautiful password manager but it works. It generates a secure password file that you decide how to distribute. This may be the hardest part for non-technical folks, but you can easily set it up to share across Dropbox or Google Drive. Once that is set up you can install the Desktop applications and mobile apps to try it out across devices. I'd recommend understanding the multi-device process before porting everything into a single password manager. KeePassXC does not natively support autofill, but I saw that as an additional security risk that I was unwilling to take on. (There is a plugin for it [KeePass-HTTP](https://github.com/pfn/keepasshttp))

##### Other options
- [LastPass](https://www.lastpass.com/)
- [EnPass](https://www.enpass.io/)
- [Unix pass](https://www.passwordstore.org/)

## TLDR
Use a password manager! It isn't as complicated as you think. It is worth it on the convenience alone! Oh yea, it's also more secure than not using one.
