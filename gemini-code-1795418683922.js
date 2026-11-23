const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/chat", (req, res) => {
  const userMessage = (req.body.message || "").trim();

  if (!userMessage) {
    return res.status(400).json({ reply: "ကျေးဇူးပြု၍ မေးခွန်း သို့မဟုတ် စာတစ်ကြောင်း ရိုက်ထည့်ပါ။" });
  }

  const reply =
    "မင်္ဂလာပါ။ ကျွန်တော်တို့ ယေဘုယျ ကျန်းမာရေး အသိပညာပေးနှင့် အကြံပြုချက်များကို မျှဝေပေးနေပါသည်။ တိကျသော ဆွေးနွေးတိုင်ပင်မှုများအတွက် ဆိုင်သို့ ကိုယ်တိုင် လာရောက်ဆွေးနွေးနိုင်ပါသည်။ (သင်မေးထားသည်မှာ: \"" +
    userMessage +
    "\")";

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});