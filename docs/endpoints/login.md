# Group ログイン

## ログイン [/login]

### ログイン [POST]

#### 処理概要
* ログインする。

+ Request (application/json)
    + Attributes
        + mail_address: `test@example.com` (string, required) - メールアドレス
        + password: `passwordexample` (string, required) - パスワード

+ Response 200 (application/json)
    + Attributes
        + expires_in: `2592000` (number) - 有効期限(秒)
        + access_token: `0f33290defaba5bcee3344e5e51bdd2691089ffcecfd34b4053edd3868056a7fb775e59498bf0520` (string) - アクセストークン
        + refresh_token: `0f33290defaba5bcee3344e5e51bdd2691089ffcecfd34b4053edd3868056a7fb775e59498bf0520` (string) - リフレッシュトークン
