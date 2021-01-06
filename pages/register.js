import Head from '../components/Head'

export default function RegisterPage() {
    return (
        <div>
            <Head>
                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
            </Head>
            <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr1x94ouUthItwkJ?backgroundColor=orange" frameBorder={0} onmousewheel width="100%" height="2544.005682" style={{background: 'transparent', border: '1px solid #ccc'}} />
        </div>
    )
}