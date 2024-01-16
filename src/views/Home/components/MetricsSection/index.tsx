import { Heading, Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  // const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  // const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <img src="/images/community2.png" alt="WoofSwap" className="Shadow-road" width="36px"  />,
  }

  const TradesCardData: IconCardData = {
    icon: <img src="/images/trade.png" alt="WoofSwap" className="Shadow-road" width="36px"  />,
  }

  const StakedCardData: IconCardData = {
    icon: <img src="/images/staked.png" alt="WoofSwap" className="Shadow-road" width="36px"  />,
  }

  return /* (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
    <img src="/images/woof-icon.png" alt="WoofSwap" className="Shadow-road"height="52px" width="52px"  />
      <Heading textAlign="center" scale="xl">
        {t('Built on Core Solid Foundation')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Supported By CoreDao.')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t('WoofSwap is here to help you cast your woof onto your finance and ease you in the Defi Verse.')}
      </Text>
      {/* <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{tvl ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex> }

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Will you join the Shadows?')}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%users% users', { users })}
            bodyText={t('in the last 30 days')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%trades% trades', { trades })}
            bodyText={t('made in the last 30 days')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('$%tvl% staked', { tvl: tvlString })}
            bodyText={t('Total Value Locked')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  )*/
}

export default Stats
