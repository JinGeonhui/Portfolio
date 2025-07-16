[FrontEnd repository](https://github.com/Dawa-kody/DAWA-Frontend/tree/develop)

기존 엑셀 기반의 규태맘 보건일지의 공식적인 프로그램이 아닌 문제와 기능 오류 문제를 해결하기 위해 개발한 보건실 관리 서비스입니다.
2025 AI SW 체험 축전에서 광주소프트웨어마이스터고등학교 대표로 부스 운영을 하였으며 <span style="color:#0968DA; font-weight:bold">420명 중 97%</span>의 긍정적인 반응을 얻었습니다.
현재 <span style="color:#0968DA; font-weight:bold">전교생 200+명과 교직원 전원</span>이 사용 중이며, 지속적으로 유지보수 중입니다.

### 구현
- xlsx 라이브러리를 이용하여 xlsx 파일에서의 데이터를 패칭 및 생성 규칙을 통해 이메일 자동 생성 및 교내 전교생 기본 정보 자동 등록하여 기존 수기 방식으로 진행해서 생긴 데이터 중복/오탈자 문제를 해결.
[[PR]](https://github.com/Dawa-kody/DAWA-Frontend/pull/174)
- Zustand를 이용한 전역 데이터를 정해진 주기마다 불러오는 방식으로 약을 생성/수정/삭제 가능한 기록 테이블을 구현하였다. 이를 통하여 기존 약의 개수, 유통기한 등 약에 대한 정보를 확인하는 주기를 <span style="color:#0968DA; font-weight:bold">월 1회에서 연 1회로 단축</span>하였으며, <span style="color:#0968DA; font-weight:bold">기존 재고 파악 시간을 95% 단축</span>하였다. [[PR]](https://github.com/Dawa-kody/DAWA-Frontend/pull/170/commits/2090a843e265f0e57f22732877b1f49234b924a4)

### 트러블 슈팅
- 기존 백업 기능의 저장 누락 및 비효율적인 폴더 구조 문제를 해결하기 위해, 데이터 저장을 DB 기반으로 전환하고 자동 백업 기능을 구현했습니다. 사용자는 원하는 날짜를 선택해 백업 데이터를 쉽게 다운로드할 수 있으며, 백엔드에서는 요청한 데이터를 Excel로 변환하여 응답하고, 프론트에서는 createObjectURL로 다운로드를 지원합니다.
[[PR]](https://github.com/Dawa-kody/DAWA-Frontend/pull/136)
