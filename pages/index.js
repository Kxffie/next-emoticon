import Head from 'next/head'
import styles from '../styles/index.module.scss'

{/* 

██████╗░██╗░░░░░███████╗░█████╗░░██████╗███████╗  ██╗░██████╗░███╗░░██╗░█████╗░██████╗░███████╗
██╔══██╗██║░░░░░██╔════╝██╔══██╗██╔════╝██╔════╝  ██║██╔════╝░████╗░██║██╔══██╗██╔══██╗██╔════╝
██████╔╝██║░░░░░█████╗░░███████║╚█████╗░█████╗░░  ██║██║░░██╗░██╔██╗██║██║░░██║██████╔╝█████╗░░
██╔═══╝░██║░░░░░██╔══╝░░██╔══██║░╚═══██╗██╔══╝░░  ██║██║░░╚██╗██║╚████║██║░░██║██╔══██╗██╔══╝░░
██║░░░░░███████╗███████╗██║░░██║██████╔╝███████╗  ██║╚██████╔╝██║░╚███║╚█████╔╝██║░░██║███████╗
╚═╝░░░░░╚══════╝╚══════╝╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═╝░╚═════╝░╚═╝░░╚══╝░╚════╝░╚═╝░░╚═╝╚══════╝

████████╗██╗░░██╗███████╗  ███╗░░██╗░█████╗░░██████╗████████╗██╗░░░██╗  ░█████╗░░█████╗░██████╗░███████╗
╚══██╔══╝██║░░██║██╔════╝  ████╗░██║██╔══██╗██╔════╝╚══██╔══╝╚██╗░██╔╝  ██╔══██╗██╔══██╗██╔══██╗██╔════╝
░░░██║░░░███████║█████╗░░  ██╔██╗██║███████║╚█████╗░░░░██║░░░░╚████╔╝░  ██║░░╚═╝██║░░██║██║░░██║█████╗░░
░░░██║░░░██╔══██║██╔══╝░░  ██║╚████║██╔══██║░╚═══██╗░░░██║░░░░░╚██╔╝░░  ██║░░██╗██║░░██║██║░░██║██╔══╝░░
░░░██║░░░██║░░██║███████╗  ██║░╚███║██║░░██║██████╔╝░░░██║░░░░░░██║░░░  ╚█████╔╝╚█████╔╝██████╔╝███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝  ╚═╝░░╚══╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░░░░╚═╝░░░  ░╚════╝░░╚════╝░╚═════╝░╚══════╝


███╗░░░███╗░█████╗░██████╗░███████╗  ███╗░░░███╗██╗░░░██╗  ██╗░░██╗██╗░░██╗███████╗███████╗██╗███████╗
████╗░████║██╔══██╗██╔══██╗██╔════╝  ████╗░████║╚██╗░██╔╝  ██║░██╔╝╚██╗██╔╝██╔════╝██╔════╝██║██╔════╝
██╔████╔██║███████║██║░░██║█████╗░░  ██╔████╔██║░╚████╔╝░  █████═╝░░╚███╔╝░█████╗░░█████╗░░██║█████╗░░
██║╚██╔╝██║██╔══██║██║░░██║██╔══╝░░  ██║╚██╔╝██║░░╚██╔╝░░  ██╔═██╗░░██╔██╗░██╔══╝░░██╔══╝░░██║██╔══╝░░
██║░╚═╝░██║██║░░██║██████╔╝███████╗  ██║░╚═╝░██║░░░██║░░░  ██║░╚██╗██╔╝╚██╗██║░░░░░██║░░░░░██║███████╗
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═╝░░░░░╚═╝░░░╚═╝░░░  ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░╚═╝╚══════╝

*/}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kxffiehub.xyz | Home</title>
        
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="author" content="Kxffie" />
        <meta name="description" content="Kxffiehub.xyz | Copy and Paste Emoticons!" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, Next, ReactJS, React, Kxffie, Koffie, Youtube, Emoticon, Copy and Paste, Emoticon Website, Funny Emojis, Emoji, Emojis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <script async src="https://arc.io/widget.min.js#DnCcJ8yZ"></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.divider} />
        <h3 className={styles.reason}>Hello, this website was made because I hate always looking online for specific faces. So I just made this because I know im not the only one. This contains every text-face that I know of, especially Lenny.</h3>
        <div className={styles.divider} />

        <h2>Click to Copy</h2>
        <div className={styles.row}>
          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('( ͡° ͜ʖ ͡°)')}>
            <div className={styles.card}>( ͡° ͜ʖ ͡°)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('¯\\\_(ツ)_/¯')}>
            <div className={styles.card}>¯\_(ツ)_/¯</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)')}>
            <div className={styles.card}>( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('▄︻̷̿┻̿═━一')}>
            <div className={styles.card}>▄︻̷̿┻̿═━一</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ʕ•ᴥ•ʔ')}>
            <div className={styles.card}>ʕ•ᴥ•ʔ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(▀̿Ĺ̯▀̿ ̿)')}>
            <div className={styles.card}>(▀̿Ĺ̯▀̿ ̿)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(ง ͠° ͟ل͜ ͡°)ง')}>
            <div className={styles.card}>(ง ͠° ͟ل͜ ͡°)ง</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('༼ つ ◕_◕ ༽つ')}>
            <div className={styles.card}>༼ つ ◕_◕ ༽つ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ಠ_ಠ')}>
            <div className={styles.card}>ಠ_ಠ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(づ｡◕‿‿◕｡)づ')}>
            <div className={styles.card}>(づ｡◕‿‿◕｡)づ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)')}>
            <div className={styles.card}>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]')}>
            <div className={styles.card}>[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴')}>
            <div className={styles.card}>┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('( ͡°╭͜ʖ╮͡° )')}>
            <div className={styles.card}>(( ͡°╭͜ʖ╮͡° ))</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(͡ ͡° ͜ つ ͡͡°)')}>
            <div className={styles.card}>(͡ ͡° ͜ つ ͡͡°)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(• Ε •)')}>
            <div className={styles.card}>(• Ε •)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(ಥ﹏ಥ)')}>
            <div className={styles.card}>(ಥ﹏ಥ)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('﴾͡๏̯͡๏﴿ O\'RLY?')}>
            <div className={styles.card}>﴾͡๏̯͡๏﴿ O&apos;RLY?</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(ノಠ益ಠ)ノ彡┻━┻')}>
            <div className={styles.card}>(ノಠ益ಠ)ノ彡┻━┻</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]')}>
            <div className={styles.card}>[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧')}>
            <div className={styles.card}>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(☞ﾟ∀ﾟ)☞')}>
            <div className={styles.card}>(☞ﾟ∀ﾟ)☞</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('| (• ◡•)| (❍ᴥ❍Ʋ)')}>
            <div className={styles.card}>| (• ◡•)| (❍ᴥ❍Ʋ)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(◕‿◕✿)')}>
            <div className={styles.card}>(◕‿◕✿)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(ᵔᴥᵔ)')}>
            <div className={styles.card}>(ᵔᴥᵔ)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(╯°□°)╯︵ ꞰOOQƎƆⱯɟ')}>
            <div className={styles.card}>(╯°□°)╯︵ ꞰOOQƎƆⱯɟ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(¬‿¬)')}>
            <div className={styles.card}>(¬‿¬)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)')}>
            <div className={styles.card}>(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(づ￣ ³￣)づ')}>
            <div className={styles.card}>(づ￣ ³￣)づ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ლ(ಠ益ಠლ)')}>
            <div className={styles.card}>ლ(ಠ益ಠლ)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ಠ╭╮ಠ')}>
            <div className={styles.card}>ಠ╭╮ಠ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(/╲/\\╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/\\╱\\)')}>
            <div className={styles.card}>(/╲/\╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/\╱\)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(;´༎ຶД༎ຶ`)')}>
            <div className={styles.card}>(;´༎ຶД༎ຶ`)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('♪~ ᕕ(ᐛ)ᕗ')}>
            <div className={styles.card}>♪~ ᕕ(ᐛ)ᕗ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('♥‿♥')}>
            <div className={styles.card}>♥‿♥</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('༼ つ ͡° ͜ʖ ͡° ༽つ')}>
            <div className={styles.card}>༼ つ ͡° ͜ʖ ͡° ༽つ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('༼ つ ಥ_ಥ ༽つ')}>
            <div className={styles.card}>༼ つ ಥ_ಥ ༽つ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(╯°□°）╯︵ ┻━┻')}>
            <div className={styles.card}>(╯°□°）╯︵ ┻━┻</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('( ͡ᵔ ͜ʖ ͡ᵔ )')}>
            <div className={styles.card}>( ͡ᵔ ͜ʖ ͡ᵔ )</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ヾ(⌐■_■)ノ♪')}>
            <div className={styles.card}>ヾ(⌐■_■)ノ♪</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('~(˘▾˘~)')}>
            <div className={styles.card}>~(˘▾˘~)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('◉_◉')}>
            <div className={styles.card}>◉_◉</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('\ (•◡•) /')}>
            <div className={styles.card}>\ (•◡•) /</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(~˘▾˘)~')}>
            <div className={styles.card}>(~˘▾˘)~</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(..) ( L: ) ( .-. ) ( :L ) (..)')}>
            <div className={styles.card}>(..) ( L: ) ( .-. ) ( :L ) (..)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('༼ʘ̚ل͜ʘ̚༽')}>
            <div className={styles.card}>༼ʘ̚ل͜ʘ̚༽</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽')}>
            <div className={styles.card}>༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('┬┴┬┴┤(･_├┬┴┬┴')}>
            <div className={styles.card}>┬┴┬┴┤(･_├┬┴┬┴</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ᕙ(⇀‸↼‶)ᕗ')}>
            <div className={styles.card}>ᕙ(⇀‸↼‶)ᕗ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(;´༎ຶД༎ຶ`)')}>
            <div className={styles.card}>(;´༎ຶД༎ຶ`)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ᕦ(Ò_Óˇ)ᕤ')}>
            <div className={styles.card}>ᕦ(Ò_Óˇ)ᕤ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻')}>
            <div className={styles.card}>┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('⚆ _ ⚆')}>
            <div className={styles.card}>⚆ _ ⚆</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(••) ( ••)>⌐■-■ (⌐■_■)')}>
            <div className={styles.card}>(••) ( ••)&gt;⌐■-■ (⌐■_■)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(｡◕‿‿◕｡)')}>
            <div className={styles.card}>(｡◕‿‿◕｡)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ಥ_ಥ')}>
            <div className={styles.card}>ಥ_ಥ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ヽ༼ຈل͜ຈ༽ﾉ')}>
            <div className={styles.card}>ヽ༼ຈل͜ຈ༽ﾉ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('⌐╦╦═─')}>
            <div className={styles.card}>⌐╦╦═─</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('˙ ͜ʟ˙')}>
            <div className={styles.card}>˙ ͜ʟ˙</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('☜(˚▽˚)☞')}>
            <div className={styles.card}>☜(˚▽˚)☞</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(•Ω•)')}>
            <div className={styles.card}>(•Ω•)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(ง°ل͜°)ง')}>
            <div className={styles.card}>(ง°ل͜°)ง</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(｡◕‿◕｡)')}>
            <div className={styles.card}>(｡◕‿◕｡)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('（╯°□°）╯︵( .O.)')}>
            <div className={styles.card}>（╯°□°）╯︵( .O.)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('┬──┬ ノ( ゜-゜ノ)')}>
            <div className={styles.card}>┬──┬ ノ( ゜-゜ノ)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(っ˘ڡ˘Σ)')}>
            <div className={styles.card}>(っ˘ڡ˘Σ)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('ಠ⌣ಠ')}>
            <div className={styles.card}>ಠ⌣ಠ</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(°ロ°)☝')}>
            <div className={styles.card}>(°ロ°)☝</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('｡◕‿‿◕｡')}>
            <div className={styles.card}>｡◕‿‿◕｡</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('( ಠ ͜ʖರೃ)')}>
            <div className={styles.card}>( ಠ ͜ʖರೃ)</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('╚(ಠ_ಠ)=┐')}>
            <div className={styles.card}>╚(ಠ_ಠ)=┐</div>
          </div>

          <div className={styles.column} onClick={() =>  navigator.clipboard.writeText('(─‿‿─)')}>
            <div className={styles.card}>(─‿‿─)</div>
          </div>
        </div>
        
        <center><h1>MORE COMING SOON...</h1></center>
        <div className={styles.divider} />
      </main>
    </div>
  )
}
