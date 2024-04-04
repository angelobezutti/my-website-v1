import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Experiências',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="Jun/2022 - Até o momento">
                Atuação como Engenheiro de Software para o cliente VIVO/Telefónica junto ao projeto Fênix,
                realizando a transformação digital no B2B e especializado na construção de integrações constituídas
                por API Gateway, Mensageria e Microsserviços com Java e Spring Boot.
              </TimelineItem>
              <TimelineItem title="Set/2021 - Jun/2022">
                Participação no programa de bolsas Open Banking durante 3 meses onde foram concluídos diversos
                cursos e desenvolvimentos com ênfase em Back-End utilizando Java e Spring Boot e após atuei
                junto ao time NotaNet, um software para emissão e recebimento de notas fiscais do iStudio de
                Payment Solutions utilizando Java e Spring.
              </TimelineItem>
              <TimelineItem title="Abr/2020 - Set/2020">
                Desenvolvimento e manutenção de softwares de crédito para os clientes Sicredi, Unicred e Ailos
                utilizando PHP, JavaScript, HTML, CSS e MySQL.
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;