window.ADMIN_INVESTMENT_DATA = {
  updatedAt: '2026.09.13 10:04 KST',
  signals: [
    {label:'AI·메모리 수요', value:'강함 ↑ · 안전변수 관찰', tone:'up'},
    {label:'AI 인프라', value:'확대 지속 · 자금조달 변수', tone:'watch'},
    {label:'식량·농업', value:'에너지 원가 압력 ↑', tone:'watch'},
    {label:'물·인프라', value:'직접 신규 신호 제한', tone:'watch'}
  ],
  highlights: [

    {
      date:'2026-09-12', category:'AI·반도체', kind:'AI 자금조달', importance:'핵심',
      title:'NVIDIA, Anthropic IPO에 최대 100억달러 투자 검토',
      summary:'Reuters는 Anthropic이 최대 1000억달러를 조달할 수 있는 초대형 IPO를 준비하면서 NVIDIA를 핵심 투자자로 참여시키는 방안을 논의 중이며, NVIDIA가 최대 100억달러 투자를 검토하고 있다고 보도했습니다. 아직 협의 단계로 확정 계약은 아닙니다.',
      impact:'Anthropic이 NVIDIA GPU를 대규모로 사용하는 핵심 AI 수요처라는 점에서 AI 컴퓨트 수요의 장기 확대 신호로 볼 수 있습니다. 삼성전자·SK하이닉스에는 HBM·서버 DRAM 수요에 우호적이지만, 이번 보도 자체가 신규 GPU·HBM 공급계약을 확정한 것은 아닙니다. AI 기업 밸류에이션 과열과 자체 ASIC 확대는 위험요인입니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/legal/transactional/nvidia-talks-invest-anthropics-mega-ipo-sources-say-2026-09-11/'
    },
    {
      date:'2026-09-12', category:'AI·반도체', kind:'AI 안전·전략', importance:'주의',
      title:'OpenAI·Anthropic, 최첨단 AI 개발 속도 조절론 부각',
      summary:'Anthropic CEO Dario Amodei는 강력한 AI 모델 개발 속도를 늦추고 독립 평가와 업계 공통 안전기준을 강화해야 한다고 제안했습니다. Reuters는 Sam Altman도 안전 우려가 커지면 개발 속도를 조절할 수 있다는 입장과 함께 OpenAI의 2026년 IPO를 추진하지 않겠다고 밝혔다고 전했습니다.',
      impact:'현재 확인된 실제 CAPEX 삭감이나 GPU 주문 취소는 아닙니다. 다만 안전·규제가 AI 모델 개발 속도와 데이터센터 투자 속도에 영향을 줄 수 있는 새로운 변수로 부각된 만큼 삼성전자·SK하이닉스의 HBM 수요를 볼 때 빅테크·AI랩의 CAPEX와 컴퓨트 계약을 함께 추적해야 합니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/business/anthropic-ceo-urges-ai-companies-slow-model-development-2026-09-12/'
    },
    {
      date:'2026-09-12', category:'식량·농업', kind:'에너지 원가', importance:'핵심',
      title:'사우디 East-West 송유관 일시 중단 — 농업 원가 리스크 확대',
      summary:'Reuters는 사우디아라비아가 드론 공격 이후 East-West 송유관을 일시 중단했다고 보도했습니다. 중동의 원유 운송 리스크가 다시 커지면서 유가와 운송비 상승 압력이 확대될 수 있습니다.',
      impact:'농업 밸류체인에서는 비료·디젤·곡물 운송·식품가공 비용 상승 위험이 커집니다. 원자재 가격 상승은 DBA에 상대적으로 우호적일 수 있지만, MOO·VEGI는 비료·농기계·식품업체별 원가 전가 능력에 따라 영향이 엇갈릴 수 있습니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/business/energy/saudis-shut-down-oil-pipeline-houthis-tighten-grip-red-sea-shipping-2026-09-12/'
    },


    {
      date:'2026-09-11', category:'AI·반도체', kind:'HBM 공급부족', importance:'핵심',
      title:'HBM 부족이 중국 AI칩 가격을 20~50% 끌어올림',
      summary:'Reuters는 Huawei·Cambricon 등 중국 AI칩 업체들이 글로벌 HBM 부족과 높은 조달비 때문에 차세대 AI 가속기 가격을 크게 올렸다고 보도했습니다. 공급부족이 완제품 가격에 직접 반영되는 단계입니다.',
      impact:'SK하이닉스·삼성전자·Micron 중심의 첨단 HBM 공급이 빠듯하다는 실물 신호로, 한국 메모리 업체의 계약가격과 수익성에는 긍정적입니다. 다만 중국은 수출규제와 비정상 조달비가 섞여 있어 글로벌 가격과 1:1로 해석하면 안 됩니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/world/asia-pacific/chinas-ai-chipmakers-raise-prices-high-bandwidth-memory-shortage-bites-2026-09-10/'
    },
    {
      date:'2026-09-11', category:'AI·반도체', kind:'클라우드 실적', importance:'핵심',
      title:'Oracle, AI 수요로 매출 30% 증가·계약잔고 6640억달러',
      summary:'Oracle의 분기 매출은 193억달러로 전년 대비 30% 증가했고 계약잔고는 6640억달러까지 확대됐습니다. 회사는 한 분기에 850MW의 데이터센터 용량을 추가했습니다.',
      impact:'대규모 AI 데이터센터 투자가 실제 클라우드 매출과 수주로 연결되고 있다는 긍정적 확인 신호입니다. 삼성전자·SK하이닉스에는 HBM·서버 DRAM·SSD 수요 측면에서 우호적이지만, Oracle의 높은 CAPEX와 현금흐름 부담은 리스크입니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/technology/oracles-quarterly-revenue-beats-estimates-ai-boom-drives-cloud-demand-2026-09-10/'
    },
    {
      date:'2026-09-11', category:'AI·반도체', kind:'글로벌 인프라', importance:'핵심',
      title:'NVIDIA, 호주에서 2027년까지 최대 2GW AI 데이터센터 생태계 추진',
      summary:'NVIDIA는 Firmus·CDC·NEXTDC·AirTrunk 등과 협력해 호주에서 최대 2GW의 AI 관련 데이터센터 용량 구축을 추진합니다. 현재 호주 전체 데이터센터 용량을 웃도는 수준의 대형 계획입니다.',
      impact:'AI 컴퓨트 수요가 미국을 넘어 글로벌 인프라 사이클로 확산되고 있다는 신호입니다. GPU·HBM·서버 DRAM·광통신·전력·냉각 수요에 긍정적이며, 동시에 전력과 물 사용 규제가 장기 변수로 부상합니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/world/asia-pacific/nvidia-teams-up-with-australian-partners-build-ai-factory-capacity-2026-09-10/'
    },
    {
      date:'2026-09-11', category:'AI·반도체', kind:'AI 추론', importance:'중요',
      title:'d-Matrix, NVIDIA NVLink Fusion 채택 — AI 추론 생태계 확대',
      summary:'AI 추론칩 업체 d-Matrix가 Raptor 칩을 NVIDIA 데이터센터 시스템과 연결하기 위해 NVLink Fusion을 채택했습니다. 호환 시스템은 2027년 공급을 목표로 합니다.',
      impact:'AI 시장이 학습 중심에서 추론 중심으로 넓어지며 커스텀 칩도 NVIDIA 인프라 안으로 들어오는 흐름입니다. 고대역폭·고용량 메모리와 고속 연결 수요 확대에 긍정적입니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/business/media-telecom/chip-startup-d-matrix-use-nvidia-chip-linking-tech-ai-servers-2026-09-10/'
    },
    {
      date:'2026-09-11', category:'AI·반도체', kind:'금융 리스크', importance:'주의',
      title:'빅테크 AI 투자 확대의 반대편 — 최근 1년 회사채 약 2200억달러',
      summary:'Reuters 분석은 Alphabet·Amazon·Meta·Microsoft·Oracle 등 하이퍼스케일러의 최근 1년 회사채 발행이 약 2200억달러에 이르며 AI 데이터센터 투자 자금조달이 채권시장에도 영향을 주고 있다고 지적했습니다.',
      impact:'AI CAPEX 확대는 반도체 수요에 긍정적이지만 부채·금리비용·투자수익률 악화가 향후 CAPEX 감속의 선행 신호가 될 수 있습니다. 빅테크 현금흐름과 부채 증가율을 함께 추적해야 합니다.',
      sourceName:'Reuters Breakingviews', sourceUrl:'https://www.reuters.com/commentary/reuters-open-interest/ai-debt-splurge-is-warping-credit-spreads-marty-fridson-2026-09-10/'
    },
    {
      date:'2026-09-11', category:'식량·농업', kind:'시장 전망', importance:'관찰',
      title:'USDA WASDE 발표 전 — 옥수수·대두 재고 하향 여부가 핵심',
      summary:'9월 WASDE 발표를 앞두고 시장은 미국 옥수수·대두 기말재고가 이전 USDA 전망보다 낮아질 가능성을 보고 있습니다. 아직 공식 발표 전이므로 확정치가 아닌 시장 전망으로만 봐야 합니다.',
      impact:'실제 재고가 예상보다 더 줄면 DBA에는 직접적인 가격 상승 신호가 될 수 있습니다. MOO·VEGI는 비료·종자·농기계·가공식품 비중에 따라 영향이 엇갈리므로 단순 동조 해석은 피해야 합니다.',
      sourceName:'USDA WASDE', sourceUrl:'https://www.usda.gov/oce/commodity/wasde'
    },
    {
      date:'2026-09-11', category:'물·인프라', kind:'AI 연결', importance:'관찰',
      title:'호주 2GW AI 데이터센터 계획, 전력·물 사용 규제 이슈도 확대',
      summary:'NVIDIA의 호주 AI 데이터센터 확대 계획과 함께 대규모 시설의 전력·물 소비에 대한 규제 우려도 부각됐습니다.',
      impact:'PHO·FIW·CGW의 즉각적인 매수 신호는 아니지만, AI 데이터센터가 늘수록 냉각·수처리·재이용·효율화 투자가 구조적으로 중요해질 수 있습니다. 실제 관련 기업 수주와 가이던스 확인이 다음 단계입니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/world/asia-pacific/nvidia-teams-up-with-australian-partners-build-ai-factory-capacity-2026-09-10/'
    },
    {
      date:'2026-09-10', category:'AI·반도체', kind:'대형 CAPEX', importance:'핵심',
      title:'Google, 핀란드 AI 인프라에 약 151억달러 투자',
      summary:'Google이 향후 2년간 핀란드에 약 130억유로를 투자해 AI 데이터센터 3곳을 추가 건설하고 장기 전력계약도 체결했습니다. 실제 대형 CAPEX 집행이 계속된다는 강한 신호입니다.',
      impact:'GPU·HBM·서버 DRAM·SSD·전력·냉각 수요 전반에 긍정적이며 삼성전자·SK하이닉스의 메모리 수요 지속 가능성을 높입니다. 위험요인은 데이터센터 투자수익률과 전력·지역 규제입니다.',
      sourceName:'글로벌 경제매체·Google 발표 종합', sourceUrl:'https://blog.google/inside-google/infrastructure/'
    },
    {
      date:'2026-09-10', category:'AI·반도체', kind:'전략 협력', importance:'핵심',
      title:'OpenAI·삼성전자, 차세대 반도체 협력 진전',
      summary:'OpenAI와 삼성전자의 차세대 반도체 협력이 진전되고 있다는 소식이 확인됐습니다. 세부 물량과 양산 시점은 공개되지 않았지만 단순 구매관계를 넘어 개발 협력 가능성을 시사합니다.',
      impact:'삼성전자에는 HBM·첨단 메모리와 파운드리/패키징 협력 기대를 동시에 높이는 긍정적 신호입니다. 다만 실제 대규모 공급계약과는 구분해 봐야 합니다.',
      sourceName:'OpenAI·삼성 관련 최신 보도 종합', sourceUrl:'https://openai.com/news/'
    },
    {
      date:'2026-09-10', category:'AI·반도체', kind:'서버 DRAM', importance:'핵심',
      title:'서버 DRAM 공급부족, 2027년까지 이어질 가능성',
      summary:'AI 서버의 고용량 RDIMM·DDR5 수요가 크게 늘고 공급사 재고가 낮은 가운데, 서버 DRAM의 공급부족과 가격상승 압력이 2027년까지 이어질 수 있다는 전망이 나왔습니다.',
      impact:'HBM뿐 아니라 일반 서버 DRAM까지 동시 강세가 이어질 경우 삼성전자·SK하이닉스의 메모리 수익성에 매우 긍정적입니다. 이후 계약가격과 재고 정상화 속도를 함께 봐야 합니다.',
      sourceName:'TrendForce', sourceUrl:'https://www.trendforce.com/presscenter/'
    },
    {
      date:'2026-09-10', category:'AI·반도체', kind:'파운드리', importance:'중요',
      title:'파운드리 시장 사상 최대 매출 — 삼성은 성장과 경쟁을 함께 점검',
      summary:'AI/HPC와 전력반도체 수요로 상위 파운드리 매출이 사상 최대 수준으로 확대되는 흐름이 이어지고 있습니다. 동시에 중국 SMIC가 삼성전자와 점유율 격차를 좁히는 경쟁 압력도 확인됩니다.',
      impact:'삼성전자에는 파운드리 시장 성장 자체는 긍정적이지만, 메모리 호황과 별개로 파운드리 경쟁력·수율·점유율을 따로 평가해야 합니다.',
      sourceName:'TrendForce', sourceUrl:'https://www.trendforce.com/presscenter/'
    },
    {
      date:'2026-09-10', category:'식량·농업', kind:'원가 신호', importance:'중요',
      title:'유가 100달러선 — 비료·운송·농가 생산비 상승 압력',
      summary:'브렌트유가 배럴당 100달러선을 넘나들며 비료 생산비와 농업 운송비·투입비 상승 우려가 커졌습니다.',
      impact:'DBA에는 농산물 가격 상승 압력이 긍정적일 수 있지만 MOO·VEGI 내부에서는 비료기업과 농기계·식품가공 기업의 영향이 엇갈릴 수 있습니다. 유가 상승을 농업 ETF 전체 호재로 단순화하면 안 됩니다.',
      sourceName:'글로벌 원자재 시장 점검', sourceUrl:'https://www.reuters.com/markets/commodities/'
    },
    {
      date:'2026-09-10', category:'물·인프라', kind:'오늘 점검', importance:'관찰',
      title:'물·수자원 — 신규 대형 수주·CAPEX 신호는 제한적',
      summary:'오늘 확인 기준 PHO·FIW·CGW 및 미국 주요 물 기업에서 투자판단을 바꿀 정도의 신규 대형 수주·CAPEX 상향은 제한적입니다.',
      impact:'AI 데이터센터의 전력·냉각·물 효율이 중요해지는 구조는 유지되지만, 실제 수주와 실적 가이던스가 확인될 때 투자 신호의 강도를 높여 보는 편이 적절합니다.',
      sourceName:'주요 기업 IR·ETF 운용사 점검', sourceUrl:'https://www.invesco.com/us/financial-products/etfs/product-detail?productId=ETF-PHO'
    },
    {
      date:'2026-09-09', category:'AI·반도체', kind:'컴퓨트 계약', importance:'핵심',
      title:'OpenAI, 아시아 AI 데이터센터 컴퓨트 용량 추가 확보',
      summary:'OpenAI의 컴퓨트 인프라 확보 움직임이 이어지면서 AI 모델 학습·추론에 필요한 GPU·HBM·서버 DRAM·네트워크·전력·냉각 수요가 계속 확대되는 흐름이 확인되고 있습니다.',
      impact:'삼성전자·SK하이닉스에는 HBM뿐 아니라 서버 DRAM 수요 지속 측면에서 긍정적입니다. 다만 대규모 데이터센터의 전력 확보와 투자수익성이 향후 CAPEX 속도를 좌우할 위험요인입니다.',
      sourceName:'글로벌 경제매체·기업 발표 종합', sourceUrl:'https://openai.com/index/stargate-advances-with-4-5-gigawatts-partnership-oracle/'
    },
    {
      date:'2026-09-09', category:'AI·반도체', kind:'커스텀 AI칩', importance:'핵심',
      title:'빅테크 AI 인프라, GPU에서 커스텀 칩·광통신까지 투자 범위 확대',
      summary:'대형 클라우드 사업자들의 AI 인프라 투자가 범용 GPU에만 머물지 않고 자체·커스텀 AI 가속기와 고속 광연결까지 확대되는 흐름입니다. AI 추론 시장 확대가 전체 데이터센터 반도체 수요를 넓히는 신호입니다.',
      impact:'칩 종류가 다양해져도 고대역폭·고용량 메모리 수요는 유지될 가능성이 높아 삼성전자·SK하이닉스에는 전반적으로 긍정적입니다. 반면 장기적으로 NVIDIA 의존도 하락은 GPU 생태계 내 경쟁구도를 바꿀 수 있습니다.',
      sourceName:'글로벌 기업 발표·경제매체 종합', sourceUrl:'https://aws.amazon.com/machine-learning/trainium/'
    },
    {
      date:'2026-09-09', category:'AI·반도체', kind:'첨단장비', importance:'중요',
      title:'첨단 반도체 장비 투자 확대 — AI 수요의 중장기 선행 신호',
      summary:'AI용 대형 칩과 차세대 메모리 미세공정에 필요한 EUV·High-NA EUV 등 첨단 장비 투자가 이어지고 있습니다. 장비 생산능력 확대는 고객사들의 첨단공정 투자계획이 단기에 끝나지 않을 가능성을 보여줍니다.',
      impact:'삼성전자에는 파운드리와 메모리 첨단공정, SK하이닉스에는 차세대 DRAM 공정 경쟁력 측면에서 중요합니다. 다만 첨단 장비 도입은 막대한 CAPEX 부담을 동반합니다.',
      sourceName:'ASML', sourceUrl:'https://www.asml.com/en/news'
    },
    {
      date:'2026-09-09', category:'식량·농업', kind:'원가 신호', importance:'중요',
      title:'에너지 가격 변동, 비료·농업 생산비에 다시 중요한 변수',
      summary:'에너지 가격 상승 압력은 질소비료 생산비와 농가 투입비용을 높일 수 있어 식량 밸류체인 안에서도 수혜와 부담이 갈릴 수 있습니다.',
      impact:'비료 생산기업은 가격 전가가 가능하면 수혜를 볼 수 있지만 농가·가공식품 기업에는 비용 부담입니다. MOO·VEGI의 편입기업과 DBA 같은 농산물 가격형 상품을 동일하게 해석하면 안 됩니다.',
      sourceName:'글로벌 원자재 시장 점검', sourceUrl:'https://www.reuters.com/markets/commodities/'
    },
    {
      date:'2026-09-09', category:'물·인프라', kind:'오늘 점검', importance:'관찰',
      title:'물·수자원 — 신규 대형 수주·CAPEX 신호는 아직 제한적',
      summary:'오늘 확인 기준 미국 주요 물 인프라·수처리 기업에서 투자 판단을 바꿀 정도의 신규 대형 수주나 CAPEX 상향은 제한적입니다.',
      impact:'오래된 뉴스를 반복하기보다 미국 노후 수도망 교체와 AI 데이터센터 냉각·수처리 관련 실제 수주·매출 가이던스가 새로 나오는지를 계속 추적하는 편이 효율적입니다.',
      sourceName:'주요 기업 IR·ETF 운용사 점검', sourceUrl:'https://www.invesco.com/us/financial-products/etfs/product-detail?productId=ETF-PHO'
    },
    {
      date:'2026-09-08', category:'AI·반도체', kind:'공급능력', importance:'핵심',
      title:'Micron HBM 생산능력 확대 추진 — 수요 강세의 또 다른 신호',
      summary:'업계 보도에서는 Micron이 2026년 말까지 HBM 생산능력을 크게 늘리는 방안을 추진하는 것으로 전해졌습니다. 경쟁사까지 증설 속도를 높이는 것은 AI 가속기용 HBM 수요가 여전히 강하다는 신호로 볼 수 있습니다.',
      impact:'삼성전자·SK하이닉스에는 AI 메모리 시장 확대 자체가 긍정적입니다. 동시에 Micron 증설은 2027년 이후 경쟁 심화와 가격 압력 가능성도 키울 수 있어 HBM4 출하량·계약가격·점유율을 함께 봐야 합니다.',
      sourceName:'업계 보도 종합', sourceUrl:'https://www.micron.com/about/blog'
    },
    {
      date:'2026-09-08', category:'식량·농업', kind:'정책·투자', importance:'중요',
      title:'중국, 식량안보·농촌 현대화 금융지원 확대',
      summary:'중국이 식량안보와 농촌 현대화를 위해 재정·대출·보험·지방채·민간자본을 활용한 농업 투자 확대 방침을 내놨습니다. 곡물·종자·농업 인프라 및 생산성 향상 투자 확대가 핵심입니다.',
      impact:'VEGI·MOO처럼 농업 생산기업·종자·비료·농기계 비중이 있는 ETF에는 중장기 수요 확대 신호가 될 수 있습니다. 반대로 DBA처럼 농산물 가격 자체에 민감한 상품은 생산성 향상으로 공급이 늘면 가격 상승폭이 제한될 수 있습니다.',
      sourceName:'글로벌 경제매체·정책 발표 종합', sourceUrl:'https://www.reuters.com/markets/commodities/'
    },
    {
      date:'2026-09-08', category:'식량·농업', kind:'마진 경고', importance:'중요',
      title:'Tyson 사례가 보여주는 식량가격 상승의 양면성',
      summary:'미국 소 공급 부족과 높은 원가 부담으로 Tyson Foods의 이익 전망이 압박받고 있습니다. 식량가격 상승이 식품기업 전반의 이익 증가로 곧바로 이어지지는 않는다는 대표 사례입니다.',
      impact:'식량 테마는 곡물·가축·비료·종자·농기계·가공식품을 분리해서 봐야 합니다. 원재료 가격 상승은 생산자나 원자재 ETF에는 우호적일 수 있지만 가공식품 기업에는 마진 악화 요인이 될 수 있습니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/business/retail-consumer/tyson-foods-cuts-annual-sales-profit-forecasts-beef-pressure-weighs-2026-09-03/'
    },
    {
      date:'2026-09-08', category:'물·인프라', kind:'오늘 점검', importance:'중요',
      title:'물·수자원 — 오늘 신규 대형 CAPEX·수주 신호는 제한적',
      summary:'오늘 확인 기준 PHO·FIW·CGW 및 주요 미국 물 기업과 관련해 시장 판단을 바꿀 정도의 신규 대형 CAPEX·수주·실적 가이던스 변화는 제한적입니다.',
      impact:'억지로 오래된 뉴스를 채우기보다 기존 핵심 추세인 미국 노후 수도망 교체와 AI 데이터센터 냉각·수처리 수요를 계속 추적하는 편이 효율적입니다. 신규 수주나 CAPEX 상향이 확인될 때 비중을 높여 보는 전략이 적절합니다.',
      sourceName:'주요 기업 IR·ETF 운용사 점검', sourceUrl:'https://www.invesco.com/us/financial-products/etfs/product-detail?productId=ETF-PHO'
    },
    {
      date:'2026-09-07', category:'AI·반도체', kind:'산업 데이터', importance:'핵심',
      title:'AI 서버 수요가 DRAM 공급 증가를 계속 앞지름',
      summary:'TrendForce는 2분기 DRAM 산업 매출이 전분기 대비 59.5% 증가했고, AI 서버·LLM 학습·추론과 에이전트형 AI가 HBM3E·LPDDR5X·고용량 RDIMM 수요를 밀어 올렸다고 분석했습니다. 공급사 재고는 역사적으로 낮은 수준이며 추가 공급도 서버용에 우선 배정되고 있습니다.',
      impact:'삼성전자·SK하이닉스 관점에서 가장 중요한 최신 신호입니다. HBM뿐 아니라 일반 서버 DRAM까지 가격과 수요가 강하다는 점이 메모리 업황 장기화에 긍정적입니다.',
      sourceName:'TrendForce', sourceUrl:'https://www.trendforce.com/presscenter/news/20260907-13219.html'
    },
    {
      date:'2026-09-07', category:'AI·반도체', kind:'글로벌 투자', importance:'핵심',
      title:'AI 인프라 업체 IREN, 2027년 6월까지 최대 300억달러 투자 계획',
      summary:'Financial Times 보도에 따르면 NVIDIA 파트너인 IREN은 AI 컴퓨팅 수요가 계속 공급을 웃돌 것으로 보고 2027년 6월까지 최대 300억달러를 AI 인프라에 투자할 계획입니다. Goldman Sachs는 미국 데이터센터 용량이 2030년까지 약 3배가 될 수 있다고 전망했습니다.',
      impact:'AI 데이터센터의 실제 CAPEX가 계속 커진다면 GPU·HBM·서버 DRAM·전력·냉각 장비 수요가 함께 늘어나는 구조입니다. 반도체 수요 피크아웃 우려와 반대되는 신호입니다.',
      sourceName:'Financial Times', sourceUrl:'https://www.ft.com/content/27c07fd7-dc7d-42ec-9b89-38bb14cc1676'
    },
    {
      date:'2026-09-07', category:'AI·반도체', kind:'한국 증시', importance:'중요',
      title:'서울·도쿄 반도체주 급등 — AI 메모리 수요 기대 재부각',
      summary:'AP는 7일 코스피가 4.6% 급등하고 삼성전자와 SK하이닉스가 각각 약 5.7%, 8.1% 상승했다고 전했습니다. 일본 반도체주도 동반 강세를 보이며 AI 하드웨어 수요 기대가 아시아 전반으로 확산됐습니다.',
      impact:'단기 주가 상승 자체보다, 시장이 다시 AI 하드웨어·메모리 수요의 지속성을 가격에 반영하기 시작했다는 점을 관찰해야 합니다. 이후 실적 추정치 상향이 따라오는지가 중요합니다.',
      sourceName:'Associated Press', sourceUrl:'https://apnews.com/article/5fed4e21cb3f80eef06087217dbbd9f7'
    },
    {
      date:'2026-09-03', category:'식량·농업', kind:'기업 투자', importance:'중요',
      title:'Corteva 계열 Vylor, 글로벌 농업 혁신 투자 플랫폼 출범',
      summary:'Corteva 투자자 자료에는 9월 3일 Vylor가 글로벌 농업 혁신을 위한 신규 투자 플랫폼 Vylor Edge를 출범했다고 공지됐습니다. 9월 15일에는 분리 예정 회사들의 Investor Day도 예정돼 있습니다.',
      impact:'미국 농업 테마에서는 곡물 가격만 보는 것보다 종자·유전기술·생산성 향상 기술로 투자 자금이 이동하는지 확인할 필요가 있습니다. 9월 15일 장기 성장목표 발표가 다음 체크포인트입니다.',
      sourceName:'Corteva Investor Relations', sourceUrl:'https://investors.corteva.com/news-events/news-releases'
    },
    {
      date:'2026-09-03', category:'식량·농업', kind:'기업 실적', importance:'주의',
      title:'Tyson Foods, 미국 소 부족으로 연간 이익 전망 재차 하향',
      summary:'Reuters는 역사적인 미국 소 공급 부족과 높은 원가 부담으로 Tyson Foods가 연간 이익 전망을 다시 낮췄다고 보도했습니다. 높은 쇠고기 가격이 식품기업의 이익 증가로 곧바로 이어지지 않는 사례입니다.',
      impact:'식량 가격 상승 = 식량기업 전반의 호재라는 단순 접근은 위험합니다. 가축·원재료 조달비와 소비자의 가격 저항을 함께 봐야 합니다.',
      sourceName:'Reuters', sourceUrl:'https://www.reuters.com/business/retail-consumer/tyson-foods-cuts-annual-sales-profit-forecasts-beef-pressure-weighs-2026-09-03/'
    },
    {
      date:'2026-09-03', category:'물·인프라', kind:'실제 투자', importance:'중요',
      title:'California American Water, 860만달러 수도 인프라 개선 착수',
      summary:'American Water는 캘리포니아 Lincoln Oaks 지역에서 860만달러 규모의 수도관 교체·인프라 개선 프로젝트를 시작했다고 발표했습니다.',
      impact:'물 테마는 거대한 장기 전망보다 실제 CAPEX 집행과 요금 규제 승인이 중요합니다. 미국의 노후 수도망 교체가 개별 지역에서 실제 투자로 이어지는 사례입니다.',
      sourceName:'American Water', sourceUrl:'https://newsroom.amwater.com/press-releases?category=783&l=100'
    }
  ],
  categories: {
    ai: {
      title:'AI · 반도체',
      items:[

        {date:'2026-09-12', badge:'AI 자금조달', title:'NVIDIA, Anthropic IPO에 최대 100억달러 투자 검토', text:'Anthropic의 대형 IPO에 NVIDIA가 핵심 투자자로 참여하는 방안이 논의 중. AI 컴퓨트 수요의 장기 확대 신호지만 아직 확정 투자·반도체 공급계약은 아닙니다.', view:'긍정 + 밸류에이션 주의', source:'Reuters', url:'https://www.reuters.com/legal/transactional/nvidia-talks-invest-anthropics-mega-ipo-sources-say-2026-09-11/'},
        {date:'2026-09-12', badge:'AI 안전·전략', title:'OpenAI·Anthropic, AI 개발 속도 조절론 부각', text:'안전 우려와 독립 평가·공통 기준 강화 논의가 확대. 당장 CAPEX 삭감 신호는 아니지만 향후 AI 모델 개발·데이터센터 투자 속도를 좌우할 규제·안전 변수를 점검해야 합니다.', view:'주의·관찰', source:'Reuters', url:'https://www.reuters.com/business/anthropic-ceo-urges-ai-companies-slow-model-development-2026-09-12/'},
        {date:'2026-09-11', badge:'HBM 공급부족', title:'HBM 부족이 중국 AI칩 가격을 20~50% 끌어올림', text:'Huawei·Cambricon 등의 AI칩 가격 인상에 HBM 조달비가 직접 반영. 한국 HBM 업체의 가격·수익성에는 긍정적이지만 중국 수출규제 영향은 별도 구분.', view:'매우 긍정', source:'Reuters', url:'https://www.reuters.com/world/asia-pacific/chinas-ai-chipmakers-raise-prices-high-bandwidth-memory-shortage-bites-2026-09-10/'},
        {date:'2026-09-11', badge:'클라우드 실적', title:'Oracle, 매출 +30%·계약잔고 6640억달러', text:'AI 클라우드 수요가 실제 매출과 계약잔고로 전환. 분기 중 데이터센터 850MW 추가로 HBM·서버 DRAM·SSD 수요 기반이 확대.', view:'매우 긍정', source:'Reuters', url:'https://www.reuters.com/technology/oracles-quarterly-revenue-beats-estimates-ai-boom-drives-cloud-demand-2026-09-10/'},
        {date:'2026-09-11', badge:'글로벌 인프라', title:'NVIDIA, 호주 최대 2GW AI 데이터센터 생태계 추진', text:'Firmus·CDC·NEXTDC·AirTrunk 등과 2027년까지 최대 2GW 구축 추진. AI 컴퓨트 수요가 글로벌 인프라 사이클로 확산되는 신호.', view:'매우 긍정', source:'Reuters', url:'https://www.reuters.com/world/asia-pacific/nvidia-teams-up-with-australian-partners-build-ai-factory-capacity-2026-09-10/'},
        {date:'2026-09-11', badge:'AI 추론', title:'d-Matrix, NVIDIA NVLink Fusion 채택', text:'추론용 Raptor 칩을 NVIDIA 데이터센터 시스템과 연결. AI 수요가 학습에서 추론으로 확대되며 커스텀 칩·메모리·연결 수요의 저변이 넓어지는 흐름.', view:'긍정', source:'Reuters', url:'https://www.reuters.com/business/media-telecom/chip-startup-d-matrix-use-nvidia-chip-linking-tech-ai-servers-2026-09-10/'},
        {date:'2026-09-11', badge:'금융 리스크', title:'빅테크 AI 투자 확대와 회사채 증가를 함께 점검', text:'최근 1년 하이퍼스케일러 회사채 발행이 약 2200억달러. AI CAPEX 확대는 반도체 수요에 긍정적이지만 부채·금리·현금흐름 부담이 향후 투자 감속 신호가 될 수 있음.', view:'주의·관찰', source:'Reuters Breakingviews', url:'https://www.reuters.com/commentary/reuters-open-interest/ai-debt-splurge-is-warping-credit-spreads-marty-fridson-2026-09-10/'},
        {date:'2026-09-10', badge:'대형 CAPEX', title:'Google, 핀란드 AI 인프라에 약 151억달러 투자', text:'AI 데이터센터 3곳 추가와 장기 전력계약을 포함한 실제 대형 투자. HBM·서버 DRAM·SSD·전력·냉각 수요 전반에 긍정적.', view:'매우 긍정', source:'Google / 글로벌 매체', url:'https://blog.google/inside-google/infrastructure/'},
        {date:'2026-09-10', badge:'전략 협력', title:'OpenAI·삼성전자, 차세대 반도체 협력 진전', text:'단순 메모리 구매를 넘어 개발 협력 가능성을 시사. 실제 물량·양산 시점 공개 여부를 다음 확인 포인트로 봅니다.', view:'긍정', source:'OpenAI / 최신 보도', url:'https://openai.com/news/'},
        {date:'2026-09-10', badge:'서버 DRAM', title:'서버 DRAM 공급부족, 2027년까지 이어질 가능성', text:'AI 서버의 고용량 RDIMM·DDR5 수요와 낮은 공급사 재고가 가격상승 압력을 유지. HBM과 일반 서버 DRAM 동시 강세 여부가 핵심.', view:'매우 긍정', source:'TrendForce', url:'https://www.trendforce.com/presscenter/'},
        {date:'2026-09-10', badge:'파운드리', title:'파운드리 시장 성장 지속 — 삼성은 경쟁력 점검 필요', text:'AI/HPC 수요로 시장은 성장하지만 SMIC와의 점유율 경쟁은 별도 리스크. 삼성은 메모리와 파운드리를 분리해 평가해야 합니다.', view:'성장 + 경쟁주의', source:'TrendForce', url:'https://www.trendforce.com/presscenter/'},
        {date:'2026-09-09', badge:'컴퓨트 계약', title:'OpenAI, AI 컴퓨트 용량 추가 확보 흐름', text:'AI 학습·추론용 데이터센터 확보가 계속되며 GPU·HBM·서버 DRAM·전력·냉각 수요의 실물 기반이 확대되고 있습니다.', view:'긍정', source:'OpenAI / 글로벌 매체', url:'https://openai.com/index/stargate-advances-with-4-5-gigawatts-partnership-oracle/'},
        {date:'2026-09-09', badge:'커스텀 AI칩', title:'빅테크 AI 투자가 커스텀 칩·광통신으로 확대', text:'GPU뿐 아니라 자체·커스텀 가속기와 고속 네트워크까지 투자가 확대되는 흐름. 메모리 수요의 저변 확대 여부를 관찰합니다.', view:'긍정', source:'AWS / 글로벌 매체', url:'https://aws.amazon.com/machine-learning/trainium/'},
        {date:'2026-09-09', badge:'첨단장비', title:'EUV·High-NA 투자, 중장기 AI 반도체 수요 선행 신호', text:'첨단공정 장비 투자 확대는 AI 칩과 차세대 DRAM 미세화 경쟁이 지속될 가능성을 보여줍니다. CAPEX 부담도 함께 체크합니다.', view:'중장기 긍정', source:'ASML', url:'https://www.asml.com/en/news'},
        {date:'2026-09-08', badge:'HBM 증설', title:'Micron HBM 생산능력 확대 추진', text:'경쟁사까지 HBM 생산능력을 공격적으로 늘리는 흐름은 AI 메모리 수요의 지속성을 뒷받침합니다. 다만 2027년 이후 경쟁 심화·가격 압력 가능성도 함께 체크.', view:'긍정 + 경쟁주의', source:'Micron / 업계 보도', url:'https://www.micron.com/about/blog'},
        {date:'2026-09-07', badge:'산업 데이터', title:'TrendForce: 2Q26 DRAM 매출 +59.5% QoQ', text:'AI 서버와 에이전트형 AI 수요가 HBM·고용량 RDIMM 수요를 끌어올리고 공급 확대는 수요 증가에 못 미치는 상황. 3분기 일반 DRAM 계약가격 상승률은 13~18% QoQ로 전망.', view:'긍정', source:'TrendForce', url:'https://www.trendforce.com/presscenter/news/20260907-13219.html'},
        {date:'2026-09-07', badge:'AI 인프라', title:'IREN: AI 컴퓨팅 수요는 계속 공급을 웃돌 가능성', text:'최대 300억달러 AI 인프라 투자 계획. 데이터센터 용량 확대가 HBM·서버메모리·전력·냉각 수요의 실물 근거가 되는지 추적.', view:'긍정', source:'Financial Times', url:'https://www.ft.com/content/27c07fd7-dc7d-42ec-9b89-38bb14cc1676'},
        {date:'2026-09-07', badge:'시장 반응', title:'한국·일본 반도체주 동반 강세', text:'코스피 급등과 삼성전자·SK하이닉스 강세. 다음 단계는 주가가 아니라 메모리 가격·출하량·실적 컨센서스의 추가 상향 여부.', view:'관찰', source:'AP', url:'https://apnews.com/article/5fed4e21cb3f80eef06087217dbbd9f7'},
        {date:'2026-09-04', badge:'업황 분석', title:'AI 서버가 HBM과 일반 DRAM을 동시에 압박', text:'TrendForce 3Q26 분석은 AI 모델 학습·에이전트형 AI가 HBM뿐 아니라 RDIMM 수요까지 확대하고 있으며, 서버 우선 배정 때문에 PC·스마트폰 메모리 비용 부담도 커지고 있다고 정리.', view:'긍정', source:'TrendForce', url:'https://www.trendforce.com/research/download/RP260904GR'},
        {date:'2026-09-01', badge:'한국 정책', title:'2027년 한국 예산안, AI·반도체 투자 확대', text:'Reuters 보도 기준 한국 정부가 AI 경쟁력과 반도체 인프라 강화를 주요 축으로 대규모 예산안을 제시. 민간 CAPEX와 함께 국내 장비·소재·인프라 투자로 연결되는지 확인.', view:'중장기 긍정', source:'Reuters', url:'https://www.reuters.com/world/asia-pacific/south-koreas-president-lee-says-interest-rate-rise-is-unavoidable-2026-09-01/'}
      ]
    },
    food: {
      title:'미국 식량 · 농업',
      items:[
        {date:'2026-09-12', badge:'에너지 원가', title:'사우디 East-West 송유관 일시 중단', text:'드론 공격 이후 핵심 송유관이 일시 중단되며 중동 원유 운송 리스크가 재확대. 비료·디젤·곡물 운송·식품가공 비용 상승 가능성 때문에 DBA와 농업기업 ETF를 구분해 봐야 합니다.', view:'DBA 우호 · MOO/VEGI 혼조', source:'Reuters', url:'https://www.reuters.com/business/energy/saudis-shut-down-oil-pipeline-houthis-tighten-grip-red-sea-shipping-2026-09-12/'},
        {date:'2026-09-11', badge:'WASDE 대기', title:'옥수수·대두 재고 하향 여부가 오늘 핵심', text:'9월 WASDE 공식 발표 전 시장은 미국 옥수수·대두 기말재고 하향 가능성을 보고 있습니다. 확정치가 아닌 전망이므로 발표 후 예상치와 실제치를 비교해야 합니다.', view:'관찰', source:'USDA WASDE', url:'https://www.usda.gov/oce/commodity/wasde'},
        {date:'2026-09-09', badge:'원가 신호', title:'에너지 가격 변동이 비료·농가 비용에 다시 변수', text:'질소비료 생산비와 농가 투입비가 에너지 가격에 민감해 식량 밸류체인 내 수혜·피해가 갈릴 수 있습니다. 비료·농기계·가공식품을 분리해 봅니다.', view:'주의·관찰', source:'글로벌 원자재 시장', url:'https://www.reuters.com/markets/commodities/'},
        {date:'2026-09-08', badge:'정책·투자', title:'중국, 식량안보·농촌 현대화 금융지원 확대', text:'종자·곡물·농업 인프라·보험·생산성 향상 투자가 확대되는 흐름. VEGI·MOO에는 관련 기업 수요 측면에서 긍정적일 수 있지만 DBA는 공급 확대 시 가격 상승이 제한될 수 있어 구분해서 봐야 합니다.', view:'중장기 관찰', source:'글로벌 정책·경제매체 종합', url:'https://www.reuters.com/markets/commodities/'},
        {date:'2026-09-03', badge:'신규 투자', title:'Vylor, 농업 혁신 투자 플랫폼 Vylor Edge 출범', text:'Corteva 분리 과정에서 종자·유전기술과 농업 혁신 투자가 강화되는 흐름. 9월 15일 Investor Day에서 장기 성장목표 확인 예정.', view:'관찰', source:'Corteva', url:'https://investors.corteva.com/news-events/news-releases'},
        {date:'2026-09-03', badge:'기업 전망', title:'Tyson, 소 공급 부족으로 이익 전망 하향', text:'미국 쇠고기 공급 부족이 높은 판매가격보다 조달비 부담을 더 키우는 상황. 식량 가격 상승의 수혜·피해 기업을 분리해서 볼 필요.', view:'주의', source:'Reuters', url:'https://www.reuters.com/business/retail-consumer/tyson-foods-cuts-annual-sales-profit-forecasts-beef-pressure-weighs-2026-09-03/'},
        {date:'2026-09-03', badge:'기술 투자', title:'John Deere, 농가용 AI 도우미 JD 시험 운영', text:'농기계 회사가 기계 판매를 넘어 농장 데이터·운영 최적화 소프트웨어로 확장. 농가 CAPEX가 둔화돼도 디지털 농업 투자가 성장축이 될지 관찰.', view:'관찰', source:'The Verge', url:'https://www.theverge.com/ai-artificial-intelligence/987486/john-deere-jd-ai-chatbot'},
        {date:'2026-09-02', badge:'수요 전망', title:'Deere: 북미 대형 농기계 수요는 2025년 대비 감소 전망', text:'높은 투입비와 상품가격 변동성으로 농가의 대형 장비 투자 압력이 지속. 식량 테마 내에서도 농기계는 단기 업황이 약할 수 있다는 신호.', view:'주의', source:'SEC / Deere 10-Q', url:'https://www.sec.gov/Archives/edgar/data/315189/000110465926102213/de-20260802x10q.htm'}
      ],
      etf:{title:'ETF 빠른 관찰', text:'VEGI는 9월 4일 기준 YTD NAV 수익률이 약 28.0%로 올라와 있습니다. 이미 상당한 상승이 있었기 때문에 신규 접근 시 곡물가격보다 편입기업의 이익 전망과 밸류에이션을 함께 확인해야 합니다.', source:'iShares VEGI', url:'https://www.ishares.com/us/products/239652/ishares-msci-global-agriculture-producers-etf'}
    },
    water: {
      title:'미국 물 · 수자원',
      items:[
        {date:'2026-09-11', badge:'AI 냉각·물', title:'호주 2GW AI 데이터센터 계획, 전력·물 사용 이슈 확대', text:'NVIDIA의 대규모 호주 데이터센터 계획과 함께 전력·물 소비 규제 우려도 부각. PHO·FIW·CGW의 즉각적 매수 신호라기보다 냉각·수처리·재이용 기업의 실제 수주와 가이던스를 확인할 단계.', view:'중장기 관찰', source:'Reuters', url:'https://www.reuters.com/world/asia-pacific/nvidia-teams-up-with-australian-partners-build-ai-factory-capacity-2026-09-10/'},
        {date:'2026-09-09', badge:'오늘 점검', title:'신규 대형 수주·CAPEX 신호는 아직 제한적', text:'오늘은 시장 판단을 바꿀 정도의 새 대형 발표가 뚜렷하지 않습니다. AI 데이터센터 냉각·수처리와 미국 수도망 교체의 실제 수주·가이던스를 계속 추적합니다.', view:'관찰 유지', source:'주요 기업 IR·ETF 운용사', url:'https://www.invesco.com/us/financial-products/etfs/product-detail?productId=ETF-PHO'},
        {date:'2026-09-08', badge:'오늘 점검', title:'신규 대형 CAPEX·수주 신호는 제한적', text:'오늘은 시장 판단을 바꿀 정도의 신규 대형 발표가 뚜렷하지 않습니다. 미국 노후 수도망 교체와 AI 데이터센터 냉각·수처리 수요의 실제 수주·CAPEX 상향 여부를 계속 추적합니다.', view:'관찰 유지', source:'주요 기업 IR·ETF 운용사 점검', url:'https://www.invesco.com/us/financial-products/etfs/product-detail?productId=ETF-PHO'},
        {date:'2026-09-03', badge:'실제 CAPEX', title:'California American Water, 860만달러 인프라 개선 착수', text:'노후 수도관 교체와 서비스 신뢰성 개선을 위한 실제 지역 투자. 물 테마에서는 이런 누적 CAPEX가 장기 실적 기반.', view:'긍정', source:'American Water', url:'https://newsroom.amwater.com/press-releases?category=783&l=100'},
        {date:'2026-08-25', badge:'예정 일정', title:'Ecolab, SC26에서 2026 Investor Day 개최 예정', text:'AI 데이터센터 냉각·수처리 사업 전략이 핵심 확인 포인트. CoolIT 인수 이후 AI 냉각 플랫폼의 매출 목표와 수주 추이를 볼 필요.', view:'관찰', source:'Ecolab IR', url:'https://investor.ecolab.com/news/default.aspx'},
        {date:'2026-07-29', badge:'기업 CAPEX', title:'American Water, 2026년 37억달러 투자계획 유지', text:'상반기 18억달러를 인프라 개선과 성장에 집행했고 연간 37억달러 계획을 유지. 규제 승인·요금 회수와 함께 보는 것이 중요.', view:'중장기 긍정', source:'American Water', url:'https://ir.amwater.com/news-and-events/financial-releases/financial-release-details/2026/AMERICAN-WATER-REPORTS-SOLID-SECOND-QUARTER-2026-RESULTS-AFFIRMS-2026-EPS-GUIDANCE-AND-LONG-TERM-TARGETS/default.aspx'},
        {date:'2026-07-20', badge:'AI 연결', title:'Ecolab: AI 데이터센터 확대에서 물·냉각 효율을 핵심 인프라로 제시', text:'AI의 전력·냉각·반도체 제조 모두 물과 연결된다는 회사 관점. 실제 투자 판단은 AI 데이터센터 관련 수처리·액체냉각 매출 성장으로 검증.', view:'관찰', source:'Ecolab', url:'https://www.ecolab.com/en-us/media-center/expert-blog/building-ai-data-centers-the-right-way'}
      ],
      etf:{title:'ETF 빠른 관찰', text:'PHO·FIW·CGW는 구성 방식이 서로 다릅니다. 물 유틸리티뿐 아니라 정수·계측·펌프·밸브·산업용 수처리 기업 비중을 확인한 뒤 접근해야 합니다. 단기 테마보다 장기 CAPEX와 금리 민감도가 핵심입니다.', source:'Invesco PHO', url:'https://www.invesco.com/us-rest/contentdetail?contentId=d15407c649400410VgnVCM10000046f1bf0aRCRD'}
    }
  },
  watch:[
    'OpenAI·Microsoft·Google·Meta·Amazon의 AI CAPEX 상향/하향',
    'NVIDIA·Broadcom·ASIC 출하 전망과 HBM4 채택 속도',
    '삼성전자·SK하이닉스 HBM 인증·공급량·가격·CAPEX',
    'DRAM·NAND 계약가격과 고객 재고 변화',
    '미국 농가소득·곡물/비료 가격·농기계 주문',
    '미국 수도망 CAPEX·수처리 수주·AI 데이터센터 냉각 투자'
  ]
};
